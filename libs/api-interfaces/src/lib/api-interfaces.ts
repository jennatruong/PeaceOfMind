export interface User {
  userId: string;
  name: string;
  sms?: string;
  voice?: string;
  email?: string;
}

export interface Task {
  taskId: string;
  userId: string;
  description: string;
  taskDateTime: string; // datetime
  recurring: boolean;
}

export interface Alert {
  alertId: string;
  taskId: string;
  userId: string;
  alertDue: string; // datetime
  alertType: 'sms' | 'voice' | 'email';
  alertDestination: string; // phone number or email
  description: string;
}

export interface AlertHistory {
  alertHistoryId: string;
  taskId: string;
  userId: string;
  alertId: string;
  alertType: 'sms' | 'voice' | 'email';
  alertSent: string; // datetime
}
