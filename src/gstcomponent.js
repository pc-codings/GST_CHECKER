// GSTChecker.js

import React, { useState, useEffect } from 'react';
import image from './line.png'
import copy from './copy.svg'

const GSTChecker = ({ gstNumber }) => {
  const [businessDetails, setBusinessDetails] = useState(null);

  const fetchData = async () => {
    try {
      if (!gstNumber) {
        return;
      }

      // API endpoint
      const apiEndpoint = `https://app.signalx.ai/apps/gst-verification/gstin-overview/${gstNumber}`;

      // Make the API call
      const response = await fetch(apiEndpoint);

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      // Parse the JSON response
      const data = await response.json();

      // Set fetched data to the state
      setBusinessDetails(data);
      console.log(data)
    } catch (error) {
      console.error('Error fetching business details:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [gstNumber]);

  if (!gstNumber) {
    return <div class="loader"></div>;
  }
  if (!businessDetails) {
    return <div className="loading"></div>;
  }
  const dateWithTime = businessDetails?.effective_date_of_reg; 


const dateObject = new Date(dateWithTime);


const formattedDate = dateObject.toLocaleDateString();
  return (
    <div className="business-details">
        <div className='parent-3'>
            <p>Registered On: {formattedDate}</p>
            <p className='ptag-1'>GST Status:Active</p>
            <p>Last Updated On: 1020</p>
        </div>
      {/* Display fetched business details here */}
      <div className='parent-4'>
        <p className='busi'>Business Details</p>
        <div className='empty'></div>
        <div className='child-1'>
            <div className='line-1'>
                <div className='line'>
                    <img  src={image}/>
                </div>
                <div className='side-line'>
                    <p className='blur'>GSTIN:</p>
                    <p>{businessDetails?.gstin}</p>
                </div>
            </div>
            <div className='line-1'>
                <div className='line'>
                    <img  src={image}/>
                </div>
                <div className='side-line'>
                <p className='blur'>Legal Business Name</p>
                <p>{businessDetails?.legal_business_name}</p>

                </div>
            </div>
            <div className='line-1'>
                <div className='line'>
                    <img  src={image}/>
                </div>
                <div className='side-line'>
                <p className='blur'>Constitution of Business:</p>
                <p>{businessDetails?.constitution_of_business}</p>

                </div>

            </div>
        </div>

        <div className='child-2'>
            <div className='line-1'>
                <div className='line'>
                    <img  src={image}/>
                </div>
                <div className='side-line'>
                <p className='blur'>GSTIN/UIN Status:</p>
                <p>{businessDetails?.gstin_uin_status}</p>
                    
                </div>
            </div>
            <div className='line-1-3'>
                <div className='line'>
                    <img  src={image}/>
                </div>
                <div className='side-line'>
                <p className='blur'>Taxpayer Type</p>
                <p>{businessDetails?.taxpayer_type}</p>

                </div>

            </div>
            <div className='line-1-2'>
                <div className='line'>
                    <img  src={image}/>
                </div>
                <div className='side-line'>
                <p className='blur'>State Jurisdiction Ward:</p>
                <p>{businessDetails?.state_jurisdiction_ward}</p>

                </div>

            </div>
        </div>
        
        
        <div className='line-1'>
            <div className='line'>
                    <img  src={image}/>
            </div>
            <div className='side-line'>
            <p className='blur'>Principal Place of Business:</p>
            <p>{businessDetails?.principal_place_of_business}</p>

            </div>

        </div>
        <div className='empty-2'></div>
        <div className='bottom-right'>
            <img src={copy}/>
            copy
        </div>

      </div>

    </div>
  );
};

export default GSTChecker;
