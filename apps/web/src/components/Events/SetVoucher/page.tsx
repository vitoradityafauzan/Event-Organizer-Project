'use client';
import { useContextGlobal } from '@/context/Context';
import { getEventByUser, postVoucher } from '@/lib/event';
import { CreateVoucher } from '@/type/event';
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from 'formik';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const SetVoucher: React.FC = () => {
  // Global state setting
  const { userData, fetchUser } = useContextGlobal();
  // State for event data
  const [events, setEvents] = useState<any[] | null>(null);

  useEffect(() => {
    if (!userData) {
      fetchUser();
    } else {
      // Fetch events by user when userData is available
      const fetchEvents = async () => {
        try {
          const fetchedEvents = await getEventByUser(userData.id);
          setEvents(fetchedEvents);
        } catch (error) {
          console.error('Error fetching events:', error);
        }
      };

      fetchEvents();
    }
  }, [userData, fetchUser]);

  const VoucherSchema = yup.object().shape({
    amount: yup.number().required('Discount Percentage Is Required!'),
  });

  // Form Submit handler
  const handleSubmit = async (
    data: CreateVoucher,
    action: FormikHelpers<CreateVoucher>,
  ) => {
    try {
      const { result } = await postVoucher(data);

      if (result.status == 'error') {
        throw result.msg;
      } else {
        toast.success(result.msg);
      }

      action.resetForm();
    } catch (err) {
      console.log(err);
      toast.error(err as String);
    }
  };

  return (
    <div>
      {userData && (
        <Formik
          initialValues={{
            eventId: userData.id,
            amount: 0,
          }}
          validationSchema={VoucherSchema}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, values }) => {
            return (
              <Form>
                {events ? (
                  <div>
                    <label htmlFor="eventId">Choose Event - {userData.firstName}</label>
                    <select
                      className="select w-full max-w-xs border-2"
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setFieldValue('eventId', Number(e.target.value));
                      }}
                      value={values.eventId}
                    >
                      <option value="">Select Event</option>
                      {events!.map((e: any) => (
                        <option key={e.idEvent} value={e.idEvent}>
                          {e.name}
                        </option>
                      ))}
                    </select>
                    <ErrorMessage
                      name="userId"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                ) : (
                  <div>
                    <label htmlFor="userId">Choose Event</label>
                    <select
                      className="select w-full max-w-xs border-2"
                      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                        setFieldValue('userId', Number(e.target.value));
                      }}
                      value={values.eventId}
                    >
                      <option value="">Select Event</option>
                    </select>
                    <ErrorMessage
                      name="userId"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                )}
                <div>
                  <label htmlFor="amount">Set Discount Percentage</label>
                  <Field type="number" name="amount" max="95" min="1" />
                  <ErrorMessage
                    name="amount"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <button type="submit">Submit</button>
              </Form>
            );
          }}
        </Formik>
      )}
    </div>
  );
};

export default SetVoucher;
