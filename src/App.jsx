import React, { useState } from 'react';
import './App.css';

// Full list of dashboards
const dashboards = [
  { name: "eAushadhi", category: "Pharmacy & Inventory", url: "https://dwhphd.dcservices.in/DWH_PHD_OPEN/startup/loginAction", access: "Login Required" },
  { name: "eSanjeevani + Teleconsultation", category: "Telehealth & Call Centres", url: "https://esanjeevani.mohfw.gov.in/#/admin/signin", access: "Login Required" },
  { name: "eHospital (Hospital Management System)", category: "Hospital Operations & Patient Services", url: "https://dashboard.ehospital.gov.in/ehospitaldashboard/", access: "Public" },
  { name: "eRaktkosh", category: "Pharmacy & Inventory", url: "https://eraktkosh.mohfw.gov.in/eRaktkoshUtilities/#/", access: "Public" },
  { name: "HWC Portal + App", category: "Primary Healthcare & Frontline Services", url: "https://aam.mohfw.gov.in/home/login", access: "Login Required" },
  { name: "NCD Portal + App", category: "Disease Surveillance & Chronic Conditions", url: "https://ncd.nhp.gov.in/", access: "Login Required" },
  { name: "IHIP", category: "Disease Surveillance & Chronic Conditions", url: "https://ihip.mohfw.gov.in/idsp/#!/home", access: "Login Required" },
  { name: "Mera Aspatal", category: "Hospital Operations & Patient Services", url: "https://meraaspataal.nhp.gov.in/", access: "Login Required" },
  { name: "RCH Portal", category: "Maternal & Child Health (RMNCH)", url: "https://rchrpt.mohfw.gov.in/RCHRPT/Dashboard/PortalDashboard.aspx", access: "Public" },
  { name: "PFMS", category: "Workforce & HR", url: "https://pfms.nic.in/Home.aspx", access: "Login Required" },
  { name: "Nikshay", category: "Disease Surveillance & Chronic Conditions", url: "https://communitysupport.nikshay.in/#", access: "Public" },
  { name: "ABDM - Insights", category: "Digital Health Ecosystem (Foundational)", url: "https://dashboard.abdm.gov.in/abdm/", access: "Public" },
  { name: "Nikusth", category: "Disease Surveillance & Chronic Conditions", url: "https://leprosy-audit.icmr.org.in/", access: "Login Required" },
  { name: "DHIS2", category: "Disease Surveillance & Chronic Conditions", url: "http://49.50.93.64/mh", access: "Login Required" },
  { name: "Maharashtra Emergency Medical System (108)", category: "Emergency & Referral Services", url: "https://mhems.in/clg/login", access: "Login Required" },
  { name: "HLL dashboard", category: "Diagnostics & Imaging", url: "https://mahahindlabs.com/", access: "Login Required" },
  { name: "Nursing Home Registration System", category: "Legal, Regulatory & Compliance", url: "https://maha-mnhregistration.co.in/", access: "Login Required" },
  { name: "MATRA Software", category: "Maternal & Child Health (RMNCH)", url: "https://play.google.com/store/apps/details?id=com.nhmup.frumis", access: "Login Required" },
  { name: "CT Scan", category: "Diagnostics & Imaging", url: "https://ilis.krsnaadiagnostics.com/", access: "Login Required" },
  { name: "Tele Radiology Services", category: "Diagnostics & Imaging", url: "https://ilis.krsnaadiagnostics.com/", access: "Login Required" },
  { name: "PMS (Construction Tracker)", category: "Infrastructure & Equipment Monitoring", url: "http://148.66.156.130/NHM/Index.aspx", access: "Login Required" },
  { name: "MedLEaPR", category: "Legal, Regulatory & Compliance", url: "http://164.100.137.235:8096/", access: "Login Required" },
  { name: "eSushrut", category: "Hospital Operations & Patient Services", url: "https://hmismaha.dcservices.in/AHIMSG5/hissso/Login", access: "Login Required" }
];

const categories = ["All", ...new Set(dashboards.map(d => d.category))];

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredDashboards = selectedCategory === "All"
    ? dashboards
    : dashboards.filter(d => d.category === selectedCategory);

  return (
    <div style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#fff', padding: '30px' }}>
      <header style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '40px',
        borderBottom: '2px solid #eee',
        padding: '0 2rem'
      }}>
        <img src="/GoM.png" alt="GoM Logo" style={{ height: '120px', marginRight: '15px' }} />
        <h1 style={{
          fontSize: '26px',
          color: '#B71C1C',
          fontWeight: '600',
          textAlign: 'center',
          flex: 1
        }}>
          Public Health Department, Maharashtra - Digital Systems Directory
        </h1>
        <img src="/PHD.png" alt="PHD Logo" style={{ height: '100px', marginLeft: '15px' }} />
      </header>

      {/* Category Tabs */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap',
        marginBottom: '25px'
      }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: '8px 16px',
              backgroundColor: selectedCategory === cat ? '#B71C1C' : '#F8F8F8',
              color: selectedCategory === cat ? '#fff' : '#333',
              border: 'none',
              borderRadius: '20px',
              fontWeight: '500',
              cursor: 'pointer',
              fontSize: '14px'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Dashboard Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px'
      }}>
        {filteredDashboards.map((d, index) => (
          <a
            key={index}
            href={d.url}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: 'none',
              backgroundColor: '#fff',
              borderRadius: '12px',
              border: '1px solid #eee',
              padding: '20px',
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
              transition: 'transform 0.2s ease',
              color: '#333'
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div style={{ fontSize: '18px', fontWeight: '600', marginBottom: 5 }}>{d.name}</div>
            <div style={{ fontSize: '14px', color: '#666', marginBottom: 10 }}>{d.category}</div>
            <span style={{
              fontSize: '12px',
              backgroundColor: d.access === "Public" ? '#E8F5E9' : '#FFEBEE',
              color: d.access === "Public" ? '#388E3C' : '#C62828',
              padding: '3px 10px',
              borderRadius: '12px',
              fontWeight: '500'
            }}>
              {d.access}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default App;
