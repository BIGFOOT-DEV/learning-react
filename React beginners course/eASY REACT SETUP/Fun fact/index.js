/* let newcontent = document.getElementById('root');
const h1 = document.createElement('h1');
h1.textContent = "hello world";
h1.className = "header";
newcontent.append(h1) */

function Main() {
    return (
        <div>
            <div><img src="https://www.pngkey.com/png/detail/222-2224712_react-react-logo-png.png" alt="React - React Logo Png@pngkey.com" width="100px"/></div>
            <h1>Fun fact about React</h1>
            <ul>
                <li>Was released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise app, including Mobile Apps</li>
            </ul>
        </div>
    )
};

function Header() {
    return(
        <header>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </header>
    )
}

function Footer() {
    return(
        <footer>
            <p>Copyright</p>
        </footer>
    )
}

ReactDOM.render(
    <div>
        <Header/>
        <Main/>
        <Footer/>

    </div>,
    document.getElementById("root")
)