import React from "react";
import { useParams } from "react-router-dom";
import "../BatchDetail.css";

const BatchDetails = () => {
  const { id } = useParams();

  return (
    <div className="batch-container">
      <div className="batch-detail-wrap">
        <h1 className="batch-title">Batch Details</h1>
        <div className="batch-header">
          <button className="batch-btn-pending active">Pending</button>
          <div className="batch-actions">
            <button className="batch-btn">Back</button>
            <button className="batch-btn">Share</button>
          </div>

          <button className="batch-btn">Show Proofs</button>
        </div>

        <div className="batch-content">
          <div className="batch-row">
            <p className="batch-label">Batch Hash:</p>
            <strong className="batch-txt">C7579945109CEA18D48788703DD92424BB0AD0ED0C12A5AC201F8008...</strong>
          </div>
          <div className="batch-row">
            <p className="batch-label">Batch Sender Address:</p>
            <strong className="batch-txt">cosmos1uuhr5kleawdryk3fehunyk8ezav2zzn8d6fj5j</strong>
          </div>
          <div className="batch-row">
            <p className="batch-label">Aggregated Proof:</p>
            <strong className="batch-txt">fffd1b15fffdfffdfffdfffdfffd351dfffd232551fffdfffd</strong>
          </div>
          <div className="batch-row">
            <p className="batch-label">Total Batch Cost:</p>
            <strong className="batch-txt">$USD 9.24</strong>
          </div>
          <div className="batch-row">
            <p className="batch-label">Saving per proof Submission:</p>
            <strong className="batch-txt">$USD 83.16</strong>
          </div>
          <div className="batch-row">
            <p className="batch-label">Amount Of Proof:</p>
            <strong className="batch-txt">20</strong>
          </div>
        </div>

        {/* Batch Footer */}
        <div className="batch-footer">
          <div className="batch-footer-item">
            <p className="batch-footer-label">Submission Timestamp:</p>
            <strong className="batch-footer-text">25 Feb 2025, 3:46:53 am</strong>
          </div>
          <div className="batch-footer-item">
            <p className="batch-footer-label">Submission Transaction Hash:</p>
            <strong className="batch-footer-text">7ab47f28d8e0b2e585e2c44f49a1e10210e82e2620f5bb70cb6e55ec6e9acda6</strong>
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
