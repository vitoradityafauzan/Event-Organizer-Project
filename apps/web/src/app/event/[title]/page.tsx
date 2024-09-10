import { Wrapper } from "@/components/Wrapper";

export default function EventDetail({ params }: { params: { title: string; }}) {
    return (
        <Wrapper>
            <h1>{params.title}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est recusandae corrupti eveniet ut laboriosam, officia saepe animi maxime, tenetur illo nostrum accusantium voluptatem quibusdam hic natus excepturi provident impedit dolore!</p>
        </Wrapper>
    )
}