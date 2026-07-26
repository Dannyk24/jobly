import { User } from "lucide-react";
import { Briefcase } from "lucide-react";
import { Clock } from "lucide-react";
import { Book } from "lucide-react";

export const jobTypeFilter = {
  TriggerIcon: User,
  placeholder: "Job Type",
  options: [
    {
      value: "",
      label: "All",
    },
    {
      value: "FULLTIME",
      label: "Full time",
    },
    {
      value: "PARTTIME",
      label: "Part time",
    },
    {
      value: "CONTRACTOR",
      label: "Contract",
    },
    {
      value: "INTERN",
      label: "Internship",
    },
  ],
};

export const workTypeFilter = {
  TriggerIcon: Briefcase,
  placeholder: "Work Type",
  options: [
    {
      value: "",
      label: "All",
    },
    {
      value: "REMOTE",
      label: "Remote",
    },
  ],
};

export const datePostedFilter = {
  TriggerIcon: Clock,
  placeholder: "Date Posted",
  options: [
    {
      value: "",
      label: "All",
    },
    {
      value: "today",
      label: "Today",
    },
    {
      value: "3days",
      label: "3 days",
    },
    {
      value: "week",
      label: "Last week",
    },
    {
      value: "month",
      label: "Last month",
    },
  ],
};

export const experienceLevelFilter = {
  TriggerIcon: Book,
  placeholder: "Experience",
  options: [
    {
      value: "",
      label: "All",
    },
    {
      value: "more_than_3_years_experience",
      label: "Over 3 years",
    },
    {
      value: "under_3_years_experience",
      label: "Under 3 years",
    },
    {
      value: "no_experience",
      label: "No experience",
    },
    {
      value: "no_degree",
      label: "No degree",
    },
  ],
};
