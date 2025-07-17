import React from 'react';
import SideNavigator from '../../components/SideBar/SideNavigator';
import NavBar from '../../components/NavBar/NavBar';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';

// Mock data for the week (simulate 7 days)
const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Simulate rostered hours per day
const rosteredHoursData = weekDays.map((day, i) => ({
  day,
  hours: Math.floor(6 + Math.random() * 4), // 6-10 hours
}));
const totalRosteredHours = rosteredHoursData.reduce((sum, d) => sum + d.hours, 0);

// Simulate late/early calls per day
const lateEarlyCallsData = weekDays.map((day, i) => ({
  day,
  late: Math.floor(Math.random() * 3),
  early: Math.floor(Math.random() * 2),
}));
const totalLate = lateEarlyCallsData.reduce((sum, d) => sum + d.late, 0);
const totalEarly = lateEarlyCallsData.reduce((sum, d) => sum + d.early, 0);

// Simulate rostered clients per day
const rosteredClientsData = weekDays.map((day, i) => ({
  day,
  clients: Math.floor(3 + Math.random() * 4), // 3-6 clients
}));
const totalRosteredClients = rosteredClientsData.reduce((sum, d) => sum + d.clients, 0);

// Simulate carers logging out early (as % of shifts)
const earlyLogoutPercent = Math.floor(8 + Math.random() * 10); // 8-18%

// Simulate weekly hours trend (increase/decrease)
const hoursTrendData = weekDays.map((day, i) => ({
  day,
  hours: 6 + i + Math.floor(Math.random() * 2),
}));

// Simple StatsCard component
interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  color: string;
  icon: string;
}
const StatsCard = ({ title, value, subtitle, color, icon }: StatsCardProps) => (
  <div style={{
    background: '#fff',
    //borderRadius: 16,
    boxShadow: '0 2px 12px rgba(23,105,170,0.08)',
    padding: '2rem 1.5rem',
    minWidth: 220,
    minHeight: 120,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  }}>
    <div style={{ fontSize: 32, color, marginBottom: 8 }}>{icon}</div>
    <div style={{ fontSize: 32, fontWeight: 700, color }}>{value}</div>
    <div style={{ fontSize: 16, color: '#555', marginTop: 4, textAlign: 'center' }}>{title}</div>
    {subtitle && <div style={{ fontSize: 13, color: '#888', marginTop: 2, textAlign: 'center' }}>{subtitle}</div>}
  </div>
);

const HomeScreen: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(120deg, #e3f0fc 0%, #f7fafd 100%)' }}>
      <SideNavigator />
      <NavBar />
      <div style={{ marginLeft: '8rem', marginTop: '4rem', padding: '2rem', maxWidth: 1200 }}>
        {/* Stats grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2rem',
          marginBottom: '3rem',
        }}>
          <StatsCard
            title="Rostered Hours (This Week)"
            value={totalRosteredHours}
            subtitle="Total hours scheduled"
            color="#1769aa"
            icon="🕒"
          />
          <StatsCard
            title="Late Calls (This Week)"
            value={totalLate}
            subtitle="Number of late calls"
            color="#d32f2f"
            icon="⏰"
          />
          <StatsCard
            title="Early Calls (This Week)"
            value={totalEarly}
            subtitle="Number of early calls"
            color="#fbc02d"
            icon="🚦"
          />
          <StatsCard
            title="Rostered Clients (This Week)"
            value={totalRosteredClients}
            subtitle="Unique clients scheduled"
            color="#388e3c"
            icon="👥"
          />
          <StatsCard
            title="Carers Logged Out Early"
            value={earlyLogoutPercent + '%'}
            subtitle="% of shifts ended early"
            color="#7b1fa2"
            icon="🚪"
          />
          <StatsCard
            title="Hours Trend"
            value={hoursTrendData[6].hours + ' hrs'}
            subtitle={`Sunday's hours (trend below)`}
            color="#1976d2"
            icon="📈"
          />
        </div>
        {/* Graphs */}
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          <div style={{ background: '#fff', boxShadow: '0 2px 12px rgba(23,105,170,0.08)', padding: '1.5rem', flex: 1, minWidth: 350 }}>
            <h3 style={{ margin: 0, marginBottom: 16, color: '#1769aa' }}>Late & Early Calls (This Week)</h3>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={lateEarlyCallsData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="8 4" />
                <XAxis dataKey="day" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="late" fill="#d32f2f" name="Late Calls" />
                <Bar dataKey="early" fill="#fbc02d" name="Early Calls" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div style={{ background: '#fff', boxShadow: '0 2px 12px rgba(23,105,170,0.08)', padding: '1.5rem', flex: 1, minWidth: 350 }}>
            <h3 style={{ margin: 0, marginBottom: 16, color: '#1769aa' }}>Rostered Hours Trend (This Week)</h3>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={hoursTrendData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Line type="monotone" dataKey="hours" stroke="#1976d2" strokeWidth={3} dot={{ r: 5 }} name="Hours" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;