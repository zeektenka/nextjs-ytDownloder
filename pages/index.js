import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(`${event.target.link.value}`);
    const res = await fetch('api/hello');
    const result = await res.json();
    console.log(result);
  };

  return (
    <div className={styles.container}>
      
      <h1 className="logo">Youtube Downloader</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <span>
            <input
              placeholder="paste link here ..."
              type="text"
              className="input"
              id="link"
              name="link"
            />
          </span>
          <button type="submit" className="d-btn">
            Download
          </button>
        </form>
      </div>
    </div>
  );
}
