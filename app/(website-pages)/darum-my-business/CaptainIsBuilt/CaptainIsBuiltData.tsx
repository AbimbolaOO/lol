import CheckIcon from '@/components/Icons/CheckIcon';
import DollarIcon from '@/components/Icons/DollarIcon';
import FuelIcon from '@/components/Icons/FuelIcon';
import ListIcon from '@/components/Icons/ListIcon';
import PlanRouter from '@/components/Icons/PlanRouter';
import RealtimeIcon from '@/components/Icons/RealtimeIcon';

interface ICaptainIsBuiltData {
  text: string;
  icon: React.ReactNode;
}
export const CaptainIsBuiltData: ICaptainIsBuiltData[] = [
  { text: "Simplified Payroll Processing", icon: <ListIcon /> },
  { text: "Real-time Performance Tracking", icon: <RealtimeIcon /> },
  { text: "Incentivize your Best Drivers", icon: <DollarIcon /> },
  { text: "Track Fuel Expenses", icon: <FuelIcon /> },
  { text: "Plan Smarter Trips", icon: <PlanRouter /> },
  { text: "Expand your Fleet", icon: <CheckIcon /> },
];
