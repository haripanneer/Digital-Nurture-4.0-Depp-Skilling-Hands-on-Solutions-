import React from 'react';
import PropTypes from 'prop-types';

const CohortDetails = ({ cohort }) => {
  return (
    <div className="cohort-details">
      <h3>{cohort.code}</h3>
      <p><strong>Name:</strong> {cohort.name}</p>
      <p><strong>Status:</strong> {cohort.status}</p>
      <p><strong>Dates:</strong> {cohort.startDate} to {cohort.endDate}</p>
      <p><strong>Participants:</strong> {cohort.participants}</p>
    </div>
  );
};

CohortDetails.propTypes = {
  cohort: PropTypes.object.isRequired,
};

export default CohortDetails;