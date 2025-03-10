import React, { useState } from "react";
import { AiOutlineCopy, AiOutlineArrowLeft, AiOutlineTwitter } from "react-icons/ai";
import "../BatchDetail.css";

const BatchDetails = () => {
  const [copiedText, setCopiedText] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const shortenText = (text) => {
    return window.innerWidth <= 768 && text.length > 15 ? text.slice(0, 15) + "..." : text;
  };

  const shortenText2 = (text) => {
    return window.innerWidth <= 768 && text.length > 30 ? text.slice(0, 30) + "..." : text;
  };

  return (
    <div className="batch-container">
      <div className="batch-detail-wrap">
        <h1 className="batch-title">Batch Details</h1>
        <div className="batch-header">
          <div className="batch-actions">
            <button className="batch-btn">
              <AiOutlineArrowLeft size={18} color="gray"  style={{ marginRight: 5 }} />
              Back
            </button>
            <button className="batch-btn">
              Share
              <AiOutlineTwitter color="gray" size={18} style={{ marginRight: 5 }} />
            </button>
          </div>

          <div className="batch-buttons-wrapper">
            <button className="batch-btn-pending active">Pending</button>
            <button className="batch-btn-proof">Show Proofs</button>
          </div>
        </div>


        <div className="batch-content">
          {[
            { label: "Batch Hash", value: "C7579945109CEA18D48788703DD92424BB0AD0ED0C12A5AC201F8008JF18319" },
            { label: "Batch Sender Address", value: "cosmos1uuhr5kleawdryk3fehunyk8ezav2zzn8d6fj5j" },
            { label: "Aggregated Proof", value: "fffd1b15fffdfffdfffdfffdfffd351dfffd232551fffdfffd" },
            { label: "Total Batch Cost", value: "$USD 9.24" },
            { label: "Saving per proof Submission", value: "$USD 83.16" },
            { label: "Amount Of Proof", value: "20" },
          ].map((item, index) => (
            <div className="batch-row" key={index}>
              <p className="batch-label">{item.label}: </p>
              <strong className="batch-txt">{shortenText(item.value)}</strong>
              {["Batch Hash", "Batch Sender Address"].includes(item.label) && (
                <button className="copy-btn" onClick={() => handleCopy(item.value)}>
                  <AiOutlineCopy size={18} color="gray" />
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="batch-footer">
          <div className="batch-footer-item">
            <p className="batch-footer-label">Submission Timestamp:</p>
            <strong className="batch-footer-text">25 Feb 2025, 3:46:53 am</strong>
          </div>
          <div className="batch-footer-item">
            <p className="batch-footer-label">Submission Transaction Hash:</p>
            <strong className="batch-footer-text">{shortenText2('7ab47f28d8e0b2e585e2c44f49a1e10210e82e2620f5bb70cb6e55ec6e9acda6')}</strong>
          </div>
          <div className="batch-footer-item">
            <p className="batch-footer-label">Submission Block Number:</p>
            <strong className="batch-footer-text">Confirming...</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BatchDetails;
