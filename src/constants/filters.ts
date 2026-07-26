import { User } from "lucide-react";

export const jobTypeFilter = {
  TriggerIcon: User,
  placeholder: "Job Type",
  options: [
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
