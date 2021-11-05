import React from "react";
import "../components/marketing.css";
import MailSubject from "../components/Marketing/MailSubject";
import LastMail from "../components/Marketing/LastMail";
import AddEmail from "../components/Marketing/AddEmail";

function Marketing() {
  return (
    <div>
      <div className="container-fluid px-5">
        <div className="row">
          <div className="col-lg-5 border mx-2 p-2 bg-light mx-auto my-2 rounded shadow-sm emails">
            <LastMail />
          </div>
          <div className="col-lg-6 border p-3 mx-2 bg-light mx-auto my-2 rounded shadow-sm addemail">
            <AddEmail />
          </div>
          <div className=" col-lg-12 border p-2 bg-light my-2 mx-auto rounded shadow-sm mail_subject">
            <MailSubject />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marketing;
