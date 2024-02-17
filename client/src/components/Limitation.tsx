const Limitation = () => {
  return (
    <div
      className="card text-center "
      style={{ width: "100%", background: "#010101212" }}
    >
      <div className="card-header">⚠️Limitation of My Work 🧑‍💻</div>
      <div className="card-body">
        <ol className="lh-lg">
          <li className="text-start text-muted">
            <span  className="h3">
              I am not using any caching, and synchronization techniques like
              React Query, this leads some performance issue 📈📈
            </span>
          </li>
          <li className="text-start text-muted">
            <span className="h3"> I have only one Model Called Song 🫙🫙</span>
          </li>
          <li className="text-start text-muted">
            <span className="h3">
              Even though I have <span style={{ color: "red" }}>.env</span> file
              in my local Directory I am not ignore it (.gitingore) for ease of
              development and deployment🧭🧭
            </span>
          </li>
          <li className="text-start text-muted">
            <span className="h3">
              I used Bootstrap Modal(updating and creating Songs) Ante Design
              Delete Confirmation (Delete popup) and react Toast (Notify)
              without your instruction 😤😤
            </span>
          </li>
          <li className="text-start text-muted">
            <span className="h3">
              The Site is not  responsive, I have only tested in my laptop 📵📵
            </span>
          </li>
        </ol>
      </div>
      <div className="card-footer text-muted">Thank you very much 🙏🙏</div>
    </div>
  );
};

export default Limitation;
