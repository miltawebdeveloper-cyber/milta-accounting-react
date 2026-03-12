import UkHeader from "../common/UkHeader";
import UkFooter from "../common/UkFooter";


export default function UkLayout({ children }) {
  return (
    <>
      <UkHeader />
      <main className="uk-main">
        <div className="uk-container">{children}</div>
      </main>
      <UkFooter />
      
    </>
  );
}
