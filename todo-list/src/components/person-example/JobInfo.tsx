import JobInfoCss from "./JobInfo.module.css";

interface JobInfoProps {
    jobTitle: string,
    company: string
}
const JobInfo = ({ jobTitle, company }: JobInfoProps) => {

    return (<div className={JobInfoCss.JobInfo}>
        {company} - {jobTitle}
    </div>)
}
export default JobInfo;