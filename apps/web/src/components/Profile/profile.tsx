'use client';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { IUserState } from '@/type/user';

export const Profile: React.FC = () => {
  const user = useAppSelector((state) => state.user);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  
  console.log('user', user.phone);
  console.log('name', user.firstName);

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    minHeight: '68.4vh',
    backgroundColor: '#f9f9f9',
    paddingTop: '0px',
  };

  const sidebarStyle: React.CSSProperties = {
    width: '300px',
    backgroundColor: '#f5f5f5',
    padding: '40px 20px 20px 40px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
    position: 'sticky',
    top: '0px',
    bottom: '0px',
    height: '68.4vh',
    alignSelf: 'flex-start',
  };

  const sidebarItemStyle = (isActive: boolean): React.CSSProperties => ({
    padding: '15px 20px',
    margin: '10px 0',
    cursor: 'pointer',
    backgroundColor: isActive ? '#ccc' : undefined,
    transition: 'background-color 0.3s ease',
  });

  const contentStyle: React.CSSProperties = {
    flex: '1',
    padding: '40px 20px 20px 50px',
  };

  const formContainerStyle: React.CSSProperties = {
    maxWidth: '600px',
  };

  const headingStyle: React.CSSProperties = {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '10px',
    marginBottom: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };

  const saveButtonStyle: React.CSSProperties = {
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  };
  return (
    <div className="lg:basis-[65%] h-full border-2 border-red-500">
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>Account Information</h2>
        {imagePreview ? (
          <div className="grow m-4 h-96 border-4 border-dashed">
            <Image
              src={imagePreview}
              alt="No Image"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full"
            />
          </div>
        ) : (
          <div className="w-9/12 h-56 border-4 border-dashed">No Image</div>
        )}
        <label htmlFor="image">Upload Image</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={(event) => {
            const file = event.target.files?.[0];
            // Define setFieldValue function
            const setFieldValue = (field: string, value: any) => {
              console.log(`Setting ${field} to`, value);
            };

            if (setFieldValue) {
              setFieldValue('image', file);
            }

            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setImagePreview(reader.result as string);
              };
              reader.readAsDataURL(file);
            } else {
              setImagePreview(null);
            }
          }}
        />
        <h2>
          Name : <span>{user.firstName}</span>
        </h2>
        <form>
          <h1> First Name :</h1>
          <input style={inputStyle} type="text" value={user.firstName} />
          <h1>Last Name :</h1>
          <input style={inputStyle} type="text" value={user.lastName} />
          <h1>Phone Number :</h1>
          <input style={inputStyle} type="text" value={user.phone} />

          <button type="button" style={saveButtonStyle}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};
