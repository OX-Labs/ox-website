import styles from './index.less';

export default function IndexPage(props) {
  return (
    <div className={styles.page}>
      <div className="container py-3">
        <div className="toggle theme-switch d-flex align-items-center ps-0 py-2  justify-content-end">
          <svg
            className="icon-toggle light active"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            ></path>
          </svg>

          <svg
            className="icon-toggle dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            ></path>
          </svg>
        </div>

        <header>
          <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
            <a
              href="/"
              className="d-flex align-items-center text-light text-decoration-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="32"
                className="me-2"
                viewBox="0 0 118 94"
                role="img"
              >
                <title>Bootstrap</title>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="fs-4">Pricing example</span>
            </a>

            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
              <a className="me-3 py-2 text-light text-decoration-none" href="#">
                Features
              </a>
              <a className="me-3 py-2 text-light text-decoration-none" href="#">
                Enterprise
              </a>
              <a className="me-3 py-2 text-light text-decoration-none" href="#">
                Support
              </a>
              <a className="py-2 text-light text-decoration-none" href="#">
                Pricing
              </a>
            </nav>
          </div>
        </header>

        <main>
          {/* <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm glassmorphism">
              <div className="card-header py-3 text-white border-primary">
                <h4 className="my-0 fw-normal">Free</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$0<small className="text-muted fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-success">Sign up for free</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm glassmorphism">
              <div className="card-header py-3 text-white border-primary">
                <h4 className="my-0 fw-normal">Pro</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$15<small className="text-muted fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-success">Get started</button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm glassmorphism">
              <div className="card-header py-3 text-white border-primary">
                <h4 className="my-0 fw-normal">Enterprise</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">$29<small className="text-muted fw-light">/mo</small></h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" className="w-100 btn btn-lg btn-success">Contact us</button>
              </div>
            </div>
          </div>
        </div> */}
          {props.children}
        </main>

        <footer className="pt-4 my-md-5 pt-md-5 border-top text-light">
          <div className="row">
            <div className="col-12 col-md text-light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="32"
                className="me-2"
                viewBox="0 0 118 94"
                role="img"
              >
                <title>Bootstrap</title>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z"
                  fill="currentColor"
                ></path>
              </svg>
              <small className="d-block mb-3">© 2017–2021</small>
            </div>
            <div className="col-6 col-md">
              <h5 className="text-light">Features</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-1">
                  <a className="text-light text-decoration-none" href="#">
                    Cool stuff
                  </a>
                </li>
                <li className="mb-1">
                  <a className="text-light text-decoration-none" href="#">
                    Random feature
                  </a>
                </li>
                <li className="mb-1">
                  <a className="text-light text-decoration-none" href="#">
                    Team feature
                  </a>
                </li>
                <li className="mb-1">
                  <a className="text-light text-decoration-none" href="#">
                    Stuff for developers
                  </a>
                </li>
                <li className="mb-1">
                  <a className="text-light text-decoration-none" href="#">
                    Another one
                  </a>
                </li>
                <li className="mb-1">
                  <a className="text-light text-decoration-none" href="#">
                    Last time
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5 className="text-light">Resources</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-1">
                  <a className="text-light text-decoration-none" href="#">
                    Resource
                  </a>
                </li>
                <li className="mb-1">
                  <a className="text-light text-decoration-none" href="#">
                    Resource name
                  </a>
                </li>
                <li className="mb-1">
                  <a className="text-light text-decoration-none" href="#">
                    Another resource
                  </a>
                </li>
                <li className="mb-1">
                  <a className="text-light text-decoration-none" href="#">
                    Final resource
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5 className="text-light">About</h5>
              <ul className="list-unstyled text-small">
                <li className="mb-1">
                  <a className="text-light text-decoration-none" href="#">
                    Team
                  </a>
                </li>
                <li className="mb-1">
                  <a className="text-light text-decoration-none" href="#">
                    Locations
                  </a>
                </li>
                <li className="mb-1">
                  <a className="text-light text-decoration-none" href="#">
                    Privacy
                  </a>
                </li>
                <li className="mb-1">
                  <a className="text-light text-decoration-none" href="#">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
