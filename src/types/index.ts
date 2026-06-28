// src/types/index.ts

export interface NavLink {
  label:     string
  href:      string
  external?: boolean
}

export interface ServiceItem {
  id:          string
  title:       string
  description: string
  features:    string[]
  icon:        string
  href:        string
}

export interface CaseStudy {
  id:          string
  slug:        string
  title:       string
  client:      string
  category:    string
  excerpt:     string
  year:        string
  tags:        string[]
  coverImage:  string
  featured:    boolean
  locked?:     boolean        
  results?:    Metric[]
}

export interface Metric {
  value: string
  label: string
}

export interface Testimonial {
  id:      string
  quote:   string
  author:  string
  role:    string
  company: string
}

export interface ProcessStep {
  number: string
  title:  string
  body:   string
}

export interface PageMeta {
  title:       string
  description: string
  ogImage?:    string
}