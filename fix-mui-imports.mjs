import fs from 'fs';
import path from 'path';

const files = [
  "src/uk-components/common/UkFooter.jsx",
  "src/states/Gorgeia/Payroll.jsx",
  "src/components/servicesComp/Industries.jsx",
  "src/components/aboutusComp/SaleSupport.jsx",
  "src/components/homeComp/Service.jsx",
  "src/components/contact/Numbers.jsx",
  "src/components/aboutusComp/MdIntro.jsx",
  "src/components/common/Footer3.jsx",
  "src/components/common/IndustriesWeServe.jsx",
  "src/components/common/Footer.jsx",
  "src/components/careerComp/WhyLoveMilta.jsx"
];

for (const file of files) {
  const fullPath = path.resolve('d:/React/Full-stack-supabase-project/my-react-app', file);
  if (!fs.existsSync(fullPath)) continue;

  let content = fs.readFileSync(fullPath, 'utf8');
  let newContent = content.replace(/import\s*\{([\s\S]*?)\}\s*from\s*['"]@mui\/icons-material['"];?/g, (match, p1) => {
    return p1
      .split(',')
      .map(name => name.trim())
      .filter(n => n)
      .map(name => `import ${name} from "@mui/icons-material/${name}";`)
      .join('\n');
  });

  if (content !== newContent) {
    fs.writeFileSync(fullPath, newContent, 'utf8');
    console.log(`Fixed: ${file}`);
  }
}
