import React, { FC, FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import FormInput from "./FormInput";


const VenmoForm: FC = () => {
  const router = useRouter();
  const [contactEmail, setContactEmail] = useState<string>("");
  const [venmoUsername, setVenmoUsername] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await fetch("/api/venmo", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contactEmail: contactEmail,
        venmoUsername: venmoUsername
      }),
    });
    router.refresh();
  };
  return (
    <div className="flex flex-col justify-center">
      <div className="block ">
        <form className="pt-10 mb-5 ">
          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <FormInput
                label="Best email to contact you"
                setState={setContactEmail}
                inputName="contact_email"
                state={contactEmail}
              />
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <FormInput
                label="Venmo username"
                setState={setVenmoUsername}
                inputName="venmo_username"
                state={venmoUsername}
              />
            </div>
          </div>
        </form>
        <button
          onClick={handleSubmit}
          className="text-black border-2  border-solid px-5 py-2 rounded-full hover:bg-white hover:border-black"
        >
          Submit information
        </button>
      </div>
    </div>
  );
};

export default VenmoForm;
