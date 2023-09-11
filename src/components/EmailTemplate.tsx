
interface EmailTemplateProps {
  firstName: string;
  description: string;
  linkedin: string;
  
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  description,
  linkedin
}) => (
  <div className="bg-blue-500 w-full h-[50%]">
    <h1 className="text-blue-500">Welcome, {firstName}!</h1>
    <a href={linkedin}> {linkedin}</a>
    <p className="text-9xl">{description}</p>
  </div>
);