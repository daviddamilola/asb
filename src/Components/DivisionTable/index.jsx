import React from 'react';
import './DivisionTable.scss';
import low from 'assets/svgs/low.svg';
import mid from 'assets/svgs/mid.svg';
import high from 'assets/svgs/high.svg';
import down from 'assets/svgs/Master.svg';

const Items = [
  {
    name: 'Courtney Henry',
    location: {
      state: 'Lagos state',
      address: '775 Rolling Green Rd.',
    },
    status: {
      label: 'No Issues',
      styleName: 'noissues',
    },
    entries: {
      unique: '19',
      type: 'Homogenous',
    },
    riskprofile: {
      image: low,
      styleName: 'low',
      label: 'Low Risk',
    },
  },
  {
    name: 'Darrell Steward',
    location: {
      state: 'Lagos state',
      address: '7529 E. Pecan St.',
    },
    status: {
      label: '2 Issues found',
      styleName: 'issues',
    },
    entries: {
      unique: '10',
      type: 'Heterogenous',
    },
    riskprofile: {
      image: mid,
      styleName: 'mid',
      label: 'Mid Risk',
    },
  },

  {
    name: 'Cody Fisher',
    location: {
      state: 'Lagos state',
      address: '8080 Railroad St.',
    },
    status: {
      label: 'No Issues',
      styleName: 'noissues',
    },
    entries: {
      unique: '13',
      type: 'Heterogenous',
    },
    riskprofile: {
      image: low,
      styleName: 'low',
      label: 'Low Risk',
    },
  },

  {
    name: 'Bessie Cooper',
    location: {
      state: 'Lagos state',
      address: '775 Rolling Green Rd.',
    },
    status: {
      label: '1 Issue found',
      styleName: 'issues',
    },
    entries: {
      unique: '12',
      type: 'Heterogenous',
    },
    riskprofile: {
      image: high,
      styleName: 'high',
      label: ' High Risk',
    },
  },

  {
    name: 'Annette Black',
    location: {
      state: 'Lagos state',
      address: '8080 Railroad St.',
    },
    status: {
      label: 'No Issues',
      styleName: 'noissues',
    },
    entries: {
      unique: '13',
      type: 'Homogenous',
    },
    riskprofile: {
      image: low,
      styleName: 'low',
      label: 'Low Risk',
    },
  },

  {
    name: 'Jenny Wilson',
    location: {
      state: 'Lagos state',
      address: '8080 Railroad St.',
    },
    status: {
      label: '5 Issues found',
      styleName: 'issues',
    },
    entries: {
      unique: '18',
      type: 'Homogenous',
    },
    riskprofile: {
      image: high,
      styleName: 'high',
      label: ' High Risk',
    },
  },

  {
    name: 'Darlene Robertson',
    location: {
      state: 'Lagos state',
      address: '3890 Poplar Dr.',
    },
    status: {
      label: '2 Issues found',
      styleName: 'issues',
    },
    entries: {
      unique: '6',
      type: 'Homogenous',
    },
    riskprofile: {
      image: mid,
      styleName: 'mid',
      label: 'Mid Risk',
    },
  },

  {
    name: 'Ralph Edwards',
    location: {
      state: 'Lagos state',
      address: '8558 Green Rd.',
    },
    status: {
      label: 'No Issues',
      styleName: 'noissues',
    },
    entries: {
      unique: '14',
      type: 'Homogenous',
    },
    riskprofile: {
      image: low,
      styleName: 'low',
      label: 'Low Risk',
    },
  },
];

const CheckBox = ({ name, handleChange, checked }) => (
  <input type='checkbox' name={name} zoom='1' onChange={handleChange} />
);

const TableItem = ({ name, location, status, entries, riskprofile }) => (
  <tr className='table-item'>
    <td className='table-item__check'>
      <span>
        <CheckBox /> <img src={down} alt='drop down' />
      </span>
    </td>
    <td className='table-item__name'>{name}</td>
    <td className='table-item__location'>
      <p className='table-item__location__state'>{location?.state}</p>
      <p className='table-item__location__address'>{location?.address}</p>
    </td>
    <td className='table-item__status'>
      <span className={status?.styleName}>{status?.label}</span>
    </td>
    <td className='table-item__entries'>
      <p className='unique'>
        <span className='unique-dot'></span>
        {entries.unique} Unique Entries
      </p>
      <p className='type'>{entries?.type}</p>
    </td>
    <td className='table-item__riskprofile'>
      <span>
        <img src={`${riskprofile?.image}`} alt={riskprofile?.label} />
      </span>
      <p className={`${riskprofile?.styleName}`}>{riskprofile?.label}</p>
    </td>
  </tr>
);

function DivisionTable() {
  return (
    <table className='division-table-wrapper'>
      <thead className='division-table-wrapper__header'>
        <tr>
          <th>
            <CheckBox />
          </th>
          <th>NAME</th>
          <th>LOCATION</th>
          <th>STATUS</th>
          <th>ENTRIES</th>
          <th>Risk profile</th>
        </tr>
      </thead>
      <tbody>
        {Items.map((each, index) => (
          <TableItem key={index} {...each} />
        ))}
      </tbody>
    </table>
  );
}

export default DivisionTable;
