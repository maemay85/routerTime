import { Form } from "react-router-dom";

export default function Contact() {
  const contact = {
    first: "Your",
    last: "Name",
    avatar: "https://placekitten.com/g/200/200",
    twitter: "your_handle",
    notes: "Some notes",
    favorite: true,
  };

  return (
    <div id="contact">
      <div>
        <img
          key={contact.avatar}
          src={contact.avatar || null}
        />
      </div>

    <div>
      <h1>
        {contact.first || contact.last ? (
          <>
            {contact.first} {contact.last}
          </>
        ) : (
          <i>No Name</i>
        )}{" "}
        <Favorite contact={contact} />
      </h1>

      {contact.twitter && (
        <p>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://twitter.com/${contact.twitter}`}
          >
            {contact.twitter}
          </a>
        </p>
      )}


    </div>
    </div>
  )
}
