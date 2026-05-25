/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface PlanItem {
  id: string;
  name: string;
  badge?: string;
  priceValue: string;
  billingPeriod: string;
  description: string;
  features: string[];
  checkoutUrl: string;
  ctaText: string;
  trialNote?: string;
  extraInfo?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Dynamic icon rendering helper
}

export interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  rating: number;
  content: string;
  avatarUrl: string;
}

export interface TrackingEvent {
  eventName: string;
  timestamp: string;
  metadata?: Record<string, any>;
}
