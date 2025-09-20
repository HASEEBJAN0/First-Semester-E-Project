let featuredProducts = [
  {
    title: "Dollar Pen",
    text: "Smooth writing, durable design, perfect for students and professionals.",
    price: "Rs. 170",
    image: "assets/pen.png",
    button: "View Details"
  },
  {
    title: "Pelikan Pen",
    text: "German crafted pen, elegant style, durable choice for professionals.",
    price: "Rs. 5,000",
    image: "assets/pen2.png",
    button: "View Details"
  },
  {
    title: "Faber-Castell Pen",
    text: "Reliable ink flow, strong grip, suitable for work and study.",
    price: "Rs. 9,000",
    image: "assets/pen3.png",
    button: "View Details"
  },
  {
    title: "Dollar Brushes",
    text: "Lightweight brushes, strong bristles, ideal for school art projects.",
    price: "Rs. 300",
    image: "assets/brush.png",
    button: "View Details"
  },
  {
    title: "Staedtler Brushes",
    text: "Soft bristles, durable handles, great for creative painting ideas.",
    price: "Rs. 700",
    image: "assets/brush2.png",
    button: "View Details"
  },
  {
    title: "Staples Pencil",
    text: "Sturdy wooden pencil, smooth writing, best for classrooms and offices.",
    price: "Rs. 200",
    image: "assets/pencil.png",
    button: "View Details"
  },
  {
    title: "Dollar Colours",
    text: "Vibrant shades, long-lasting colors, perfect for school art projects.",
    price: "Rs. 210",
    image: "assets/color.png",
    button: "View Details"
  },
  {
    title: "Pilot Pencil",
    text: "Mechanical pencil, precise writing, suitable for drawing and notes.",
    price: "Rs. 3,500",
    image: "assets/pencil2.png",
    button: "View Details"
  },
  {
    title: "Pelikan Pen",
    text: "German crafted pen, elegant style, durable choice for professionals.",
    price: "Rs. 5,000",
    image: "assets/pen2.png",
    button: "View Details"
  },
  {
    title: "Faber-Castell Pen",
    text: "Reliable ink flow, strong grip, suitable for work and study.",
    price: "Rs. 9,000",
    image: "assets/pen3.png",
    button: "View Details"
  },
  {
    title: "Dollar Pen",
    text: "Smooth writing, durable design, perfect for students and professionals.",
    price: "Rs. 170",
    image: "assets/pen.png",
    button: "View Details"
  },
  {
    title: "Dollar Brushes",
    text: "Lightweight brushes, strong bristles, ideal for school art projects.",
    price: "Rs. 300",
    image: "assets/brush.png",
    button: "View Details"
  }

];


let featuredContainer = document.getElementById("Featured-cards");
if (featuredContainer) {
  let html = "";
  for (let i = 0; i < featuredProducts.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6">
        <div class="card">
          <img src="${featuredProducts[i].image}" class="card-img-top" alt="">
          <div class="card-body">
            <h5>${featuredProducts[i].title}</h5>
            <p>${featuredProducts[i].text}</p>
            <p>${featuredProducts[i].price}</p>
            <a href="#" class="btn btn-primary">${featuredProducts[i].button}</a>
          </div>
        </div>
      </div>`;
  }
  featuredContainer.innerHTML = html;
}



    //   Navbar

document.getElementById('d-navbar').innerHTML = `
<div class="container">
            <a class="navbar-brand" href="./index.html">
                <img src="../assets/logo.png" alt="" class="img-fluid" width="100px" height="50px">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <!-- <span class="navbar-toggler-icon"></span> -->
                <i class="bi bi-list"></i>
                <i class="bi bi-x-lg d-none"></i>
            </button>
            <div class="collapse  navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto text-center">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="../index.html">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Products
                        </a>
                        <ul class="dropdown-menu">

                            <li>
                            <li><a class="dropdown-item" href="./staples.html">Staple</a></li>
                            <hr class="dropdown-divider">
                            <li><a class="dropdown-item" href="./faber-castell.html">Faber-Castell</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="./dollar.html">Dollar</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="./pelikan.html">Pelikan</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="./pilot.html">Pilot</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="./staedtler.html">Staedtler</a></li>

                        </ul>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link " href="./compare.html">Compare</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="./contact.html">Contact Us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="./about.html">About Us</a>
                    </li>
                </ul>
                <form class="w-25 d-flex justify-content-around d-lg-block d-none">
                    <button class="btn btn-purple btn-lg  ">Login</button>
                    <button class="btn btn-purple btn-lg ">Signup</button>
                </form>
            </div>
`



//     Footer



document.getElementById('d-footer').innerHTML = `
<footer class="text-center text-lg-start auto-show">
            <div class="container p- pb-0">
                <!-- Section: Links -->
                <section class="">
                    <!--Grid row-->
                    <div class="row">
                        <!-- Grid column -->
                        <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 class="text-uppercase mb-4 font-weight-bold">
                                Universal Stationer's
                            </h6>
                            <p>
                                Here you can use rows and columns to organize your footer
                                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                                elit.
                            </p>
                        </div>
                        <!-- Grid column -->

                        <hr class="w-100 clearfix d-md-none" />

                        <!-- Grid column -->
                        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
                            <p>
                                <a class="text-dark" href="./staples.html">Staples</a>
                            </p>
                            <p>
                                <a class="text-dark" href="./faber-castell.html">Faber Castell</a>
                            </p>
                            <p>
                                <a class="text-dark" href="./dollar.html">Dollar</a>
                            </p>
                            <p>
                                <a class="text-dark" href="./pelikan.html">Pelikaan</a>
                            </p>
                            <p> 
                                <a class="text-dark" href="./pilot.html">Pilot</a>
                            </p>
                            <p>
                                <a class="text-dark" href="./staedtler.html">Staedtler</a>
                            </p>
                        </div>
                        <!-- Grid column -->

                        <hr class="w-100 clearfix d-md-none" />

                        <!-- Grid column -->
                        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h6 class="text-uppercase mb-4 font-weight-bold">
                                Useful links
                            </h6>
                            <p>
                                <a class="text-dark" href="../index.html">Home</a>
                            </p>
                            <p>
                                <a class="text-dark" href="./about.html">About Us</a>
                            </p>
                            <p>
                                <a class="text-dark" href="./contact.html">Contact Us</a>
                            </p>
                            <p>
                                <a class="text-dark" href="./compare.html">Compare</a>
                            </p>
                        </div>

                        <!-- Grid column -->
                        <hr class="w-100 clearfix d-md-none" />

                        <!-- Grid column -->
                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
                            <p><i class="fas fa-home mr-3"></i> Atech Metro Star Gate</p>
                            <p><i class="fas fa-envelope mr-3"></i> universalstationer@gmail.com</p>
                            <p><i class="fas fa-phone mr-3"></i> + 92 323 667 882 32</p>
                            <p><i class="fas fa-print mr-3"></i> + 92 323 667 342 32</p>
                        </div>
                        <!-- Grid column -->
                    </div>
                    <!--Grid row-->
                </section>
                <!-- Section: Links -->

                <hr class="my-3">

                <!-- Section: Copyright -->
                <section class="p-3 pt-0">
                    <div class="row d-flex align-items-center">
                        <!-- Grid column -->
                        <div class="col-md-7 col-lg-8 text-center text-md-start">
                            <!-- Copyright -->
                            <div class="p-3">
                                © 2020 Copyright:
                                <a class="text-dark " href="../index.html">Universal Stationer's</a>
                            </div>
                            <!-- Copyright -->
                        </div>
                        <!-- Grid column -->

                        <!-- Grid column -->
                        <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                            <!-- Facebook -->
                            <a class="btn btn-outline-light btn-floating m-1" class="text-white" role="button"><i
                                    class="fab fa-facebook-f"></i></a>

                            <!-- Twitter -->
                            <a class="btn btn-outline-light btn-floating m-1" class="text-white" role="button"><i
                                    class="fab fa-twitter"></i></a>

                            <!-- Google -->
                            <a class="btn btn-outline-light btn-floating m-1" class="text-white" role="button"><i
                                    class="fab fa-google"></i></a>

                            <!-- Instagram -->
                            <a class="btn btn-outline-light btn-floating m-1" class="text-white" role="button"><i
                                    class="fab fa-instagram"></i></a>
                        </div>
                        <!-- Grid column -->
                    </div>
                </section>
                <!-- Section: Copyright -->
            </div>
            <!-- Grid container -->
        </footer>
        `


        // Dollar Cards



let dollarProducts = {
  pens: [
    {
      title: "Dollar Clipper Pen",
      text: "Smooth ink flow pen, reliable for daily school and office.",
      price: "Rs. 30",
      image: "../assets/dp-img.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Pointer Pen",
      text: "Fine tip marker pen for precise writing and exam use.",
      price: "Rs. 35",
      image: "../assets/dp-img-2.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar My Pen",
      text: "Lightweight, pocket-friendly pen with consistent ink quality.",
      price: "Rs. 25",
      image: "../assets/dp-img-3.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Fountain Pen",
      text: "Classic fountain pen, smooth nib, refillable for long-term use.",
      price: "Rs. 120",
      image: "../assets/dollar-fountain.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Crystal Pen",
      text: "Transparent body ballpoint, comfortable grip, smooth writing flow.",
      price: "Rs. 20",
      image: "../assets/dp-img-4.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar ORBIT Pen",
      text: "Premium gel pen, bold ink, perfect for smooth handwriting.",
      price: "Rs. 40",
      image: "../assets/dp-img-5.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Exam Pen",
      text: "Specially designed for long writing hours in exams.",
      price: "Rs. 35",
      image: "../assets/dp-img.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Click Pen",
      text: "Retractable pen, easy to carry, best for quick notes.",
      price: "Rs. 50",
      image: "../assets/dp-img-3.png",
      button: "View Details",
      addToCart: "Add to Cart"
    }
  ],

  pencils: [
    {
      title: "Dollar HB Pencil",
      text: "Classic HB wooden pencil for everyday writing and sketching.",
      price: "Rs. 15",
      image: "../assets/dpnc-img.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Exam Pencil",
      text: "Sharp, reliable pencil made especially for school and exams.",
      price: "Rs. 20",
      image: "../assets/dpnc-img-2.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Drawing Pencil",
      text: "High-quality pencil perfect for shading, drawing, and artwork.",
      price: "Rs. 25",
      image: "../assets/dpnc-img-3.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Neon Pencil",
      text: "Attractive neon-colored body pencil with smooth graphite core.",
      price: "Rs. 30",
      image: "../assets/dpnc-img-4.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Triangle Pencil",
      text: "Triangular grip wooden pencil for comfortable long writing sessions.",
      price: "Rs. 25",
      image: "../assets/dpnc-img-5.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Jumbo Pencil",
      text: "Thick body pencil designed for young kids and beginners.",
      price: "Rs. 35",
      image: "../assets/dpnc-img-6.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Graphite Pencil",
      text: "Premium graphite pencil with extra smooth and dark strokes.",
      price: "Rs. 40",
      image: "../assets/dpnc-img-2.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Color Pencil",
      text: "Colored wooden pencils set, great for school art projects.",
      price: "Rs. 150",
      image: "../assets/dpnc-img-4.png",
      button: "View Details",
      addToCart: "Add to Cart"
    }
  ],

  colors: [
    {
      title: "Dollar Sketch Markers",
      text: "Vibrant color markers, perfect for school projects and art.",
      price: "Rs. 200",
      image: "../assets/dc-img.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Crayons",
      text: "Bright wax crayons set, safe and non-toxic for children.",
      price: "Rs. 180",
      image: "../assets/dc-img-2.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Oil Pastels",
      text: "Smooth oil pastel sticks for rich, vibrant coloring effects.",
      price: "Rs. 250",
      image: "../assets/dc-img-3.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Poster Colors",
      text: "Bold water-based poster paints, great for school projects.",
      price: "Rs. 300",
      image: "../assets/dc-img-4.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Highlighters",
      text: "Set of bright highlighters, perfect for highlighting notes.",
      price: "Rs. 220",
      image: "../assets/dc-img-3.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Watercolors",
      text: "Palette of watercolors with brush, ideal for painting tasks.",
      price: "Rs. 280",
      image: "../assets/dc-img.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Gel Crayons",
      text: "Twistable gel crayons, non-smudge, fun for young kids.",
      price: "Rs. 350",
      image: "../assets/dc-img-4.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Dollar Dual Markers",
      text: "Dual-tip markers for coloring, sketching, and school projects.",
      price: "Rs. 400",
      image: "../assets/dc-img-2.png",
      button: "View Details",
      addToCart: "Add to Cart"
    }
  ]
};


let dollarPen = document.getElementById('dollar-pen')
let dollarPencil = document.getElementById('dollar-pencils')
let dollarColour = document.getElementById('dollar-colours')
 if(dollarPen){
  let html = '';
  for(var i = 0; i < dollarProducts.pens.length ; i++){
  html += `
      <div class="col-md-3 col-sm-6 auto-show">
        <div class="card">
          <img src=${dollarProducts.pens[i].image} class="card-img-top" alt="">
          <div class="card-body">
            <h5>${dollarProducts.pens[i].title}</h5>
            <p>${dollarProducts.pens[i].text}</p>
            <p>${dollarProducts.pens[i].price}</p>
            <a href="#" class="btn btn-info">${dollarProducts.pens[i].button}</a>
            <a href="#" class="btn btn-primary mt-1">${dollarProducts.pens[i].addToCart}</a>
          </div>
        </div>
      </div>`; 
    
  }
  dollarPen.innerHTML = html
 }
 if(dollarPencil){
  let html = '';
  for(var i = 0; i < dollarProducts.pencils.length ; i++){
  html += `
      <div class="col-md-3 col-sm-6 auto-show">
        <div class="card">
          <img src=${dollarProducts.pencils[i].image} class="card-img-top" alt="">
          <div class="card-body">
            <h5>${dollarProducts.pencils[i].title}</h5>
            <p>${dollarProducts.pencils[i].text}</p>
            <p>${dollarProducts.pencils[i].price}</p>
            <a href="#" class="btn btn-info">${dollarProducts.pencils[i].button}</a>
            <a href="#" class="btn btn-primary mt-1">${dollarProducts.pencils[i].addToCart}</a>
          </div>
        </div>
      </div>`; 
    
  }
  dollarPencil.innerHTML = html
 }
 if(dollarColour){
  let html = '';
  for(var i = 0; i < dollarProducts.pencils.length ; i++){
  html += `
      <div class="col-md-3 col-sm-6 auto-show">
        <div class="card">
          <img src=${dollarProducts.colors[i].image} class="card-img-top" alt="">
          <div class="card-body">
            <h5>${dollarProducts.colors[i].title}</h5>
            <p>${dollarProducts.colors[i].text}</p>
            <p>${dollarProducts.colors[i].price}</p>
            <a href="#" class="btn btn-info">${dollarProducts.colors[i].button}</a>
            <a href="#" class="btn btn-primary mt-1">${dollarProducts.colors[i].addToCart}</a>
          </div>
        </div>
      </div>`; 
    
  }
  dollarColour.innerHTML = html
 }







