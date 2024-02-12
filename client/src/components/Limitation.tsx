const Limitation = () => {
  return (
    <div className="card text-center border-4 " style={{ width: "100%" }}>
      <div className="card-header text-bg-warning"> ⚠️Limitation of My Work 🧑‍💻</div>
      <div className="card-body">
        <ol className="lh-lg">
          <li className="text-start text-muted">
            I am not using any caching, and synchronization techniques like
            React Query, this leads some performance issue
          </li>
          <li className="text-start text-muted">
            I have only one Model Called Song
          </li>
          <li className="text-start text-muted">
            Even though I have env file in my local Directory I am not ignore it
            (.gitingore) for ease of development
          </li>
          <li className="text-start text-muted">
            I used Bootstrap Modal(updating and creating Songs) Ante Design
            Popup Component(Delete popup) and react Toast (Notify) without your
            instruction
          </li>
          <li className="text-start text-muted">
            The site lacks responsiveness due to the absence of React UI
            components such as Material UI and Ant Design, necessitating
            considerable effort to achieve responsiveness using Styled
            Components.
          </li>
        </ol>
      </div>
      <div className="card-footer text-muted">Thank you very much 🙏🙏</div>
    </div>
  );
};

export default Limitation;
