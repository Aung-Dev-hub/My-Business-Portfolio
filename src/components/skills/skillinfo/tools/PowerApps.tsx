
import { SiPowers } from 'react-icons/si';
import TechPage from '../TechPage'

const Icon = () => (
  <div className="w-24 h-24 flex items-center justify-center text-pink-500">
    <SiPowers className="w-20 h-20" />
  </div>
);

export default function PowerApps() {
  return (
    <TechPage
    name="Power Apps"
    icon={<Icon />}
    iconBg="hsl(300 15% 12%)"
    description="A Microsoft low-code platform for building custom business applications. Power Apps enables rapid app development with pre-built templates, drag-and-drop design, and deep integration with Microsoft 365 and Dataverse."
    tags={["Low-Code", "Microsoft 365", "Dataverse", "Business Apps", "Canvas & Model-Driven"]}
    steps={[
      { title: "Sign in to Power Apps", desc: "Access Power Apps with your Microsoft 365 or Azure account.", cmd: "# Visit https://make.powerapps.com" },
      { title: "Create a Canvas App", desc: "Start a blank canvas app or choose a template.", cmd: "# Click 'Create' → 'Blank app' → 'Canvas app'" },
      { title: "Connect a data source", desc: "Add a data connection like SharePoint, Dataverse, or SQL.", cmd: "# Data → Add data → Select your connector" },
      { title: "Design your screens", desc: "Drag and drop controls like galleries, forms, and buttons.", cmd: "# Insert → Gallery / Form / Button" },
      { title: "Publish your app", desc: "Save and publish the app to share with your organization.", cmd: "# File → Save → Publish" },
    ]}
    nextHref="/skills/aws"
      middleHref="/#skills"
      backHref="/skills/vercel"
  />
  )
}
