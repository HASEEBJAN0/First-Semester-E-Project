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
 
        // featuredProducts

let featuredContainer = document.getElementById("Featured-cards");
if (featuredContainer) {
  let html = "";
  for (let i = 0; i < featuredProducts.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6 auto-show">
        <div class="card">
          <img src="${featuredProducts[i].image}" class="card-img-top img-fluid" alt="">
          <div class="card-body">
            <h5>${featuredProducts[i].title}</h5>
            
            <p>${featuredProducts[i].price}</p>
            <div>
            <a href="#" class="btn btn-info">${featuredProducts[i].button}</a>
            <a href="#" class="btn btn-primary">Add To Cart</a>
            </div>
          </div>
        </div>
      </div>`;
  }
  featuredContainer.innerHTML = html;
}



                  //   Navbar

let navbar = document.getElementById('d-navbar');
if (navbar) {
  navbar.innerHTML = `
<div class="container-fluid">
            <a class="navbar-brand " href="./index.html">
                <img src="../assets/logo.png" alt="" class="img-fluid ms-3" width="100px" height="50px">
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
                <form class=" me-3 d-lg-block d-none">
                    <button class="btn btn-purple btn-lg ">Login</button>
                    <button class="btn btn-purple btn-lg ">Signup</button>
                </form>
            </div>
`
}



          //     Footer

let footer = document.getElementById('d-footer');

if(footer) {



footer.innerHTML = `
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
}

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
if (dollarPen) {
  let html = '';
  for (var i = 0; i < dollarProducts.pens.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6 auto-show">
        <div class="card">
          <img src=${dollarProducts.pens[i].image} class="card-img-top img-fluid" alt="">
          <div class="card-body">
            <h5>${dollarProducts.pens[i].title}</h5>
            <p>${dollarProducts.pens[i].price}</p>
            <div>
            <a href="#" class="btn btn-info">${dollarProducts.pens[i].button}</a>
            <a href="#" class="btn btn-primary ">${dollarProducts.pens[i].addToCart}</a>
            </div>
          </div>
        </div>
      </div>`;

  }
  dollarPen.innerHTML = html
}
if (dollarPencil) {
  let html = '';
  for (var i = 0; i < dollarProducts.pencils.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6 auto-show">
        <div class="card">
          <img src=${dollarProducts.pencils[i].image} class="card-img-top img-fluid" alt="">
          <div class="card-body">
            <h5>${dollarProducts.pencils[i].title}</h5>
            <p>${dollarProducts.pencils[i].price}</p>
            <div>
            <a href="#" class="btn btn-info">${dollarProducts.pencils[i].button}</a>
            <a href="#" class="btn btn-primary ">${dollarProducts.pencils[i].addToCart}</a>
            </div>
          </div>
        </div>
      </div>`;

  }
  dollarPencil.innerHTML = html
}
if (dollarColour) {
  let html = '';
  for (var i = 0; i < dollarProducts.pencils.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6 auto-show">
        <div class="card ">
          <img src=${dollarProducts.colors[i].image} class="card-img-top" alt="">
          <div class="card-body h-75">
            <h5>${dollarProducts.colors[i].title}</h5>
            <p>${dollarProducts.colors[i].price}</p>
            <div>
            <a href="#" class="btn btn-info">${dollarProducts.colors[i].button}</a>
            <a href="#" class="btn btn-primary ">${dollarProducts.colors[i].addToCart}</a>
            </div>
          </div>
        </div>
      </div>`;

  }
  dollarColour.innerHTML = html
}

      // staplesProducts

let staplesProducts = {
  notebooks: [
    {
      title: "Staples Spiral Notebook",
      text: "Durable spiral binding, smooth pages for school and office.",
      price: "Rs. 250",
      image: "../assets/st-img.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Ruled Notebook",
      text: "Lined pages for neat writing, sturdy cover for daily use.",
      price: "Rs. 220",
      image: "../assets/st-img2.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Hard Cover Notebook",
      text: "Strong hardcover design, long-lasting and easy to carry.",
      price: "Rs. 350",
      image: "../assets/st-img3.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Graph Notebook",
      text: "Perfect for math and engineering notes with grid pages.",
      price: "Rs. 300",
      image: "../assets/st-img4.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Pocket Notebook",
      text: "Compact size, easy to carry for quick notes anywhere.",
      price: "Rs. 150",
      image: "../assets/st-img5.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Eco Notebook",
      text: "Made from recycled paper, eco-friendly and durable.",
      price: "Rs. 280",
      image: "../assets/st-img6.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Soft Cover Notebook",
      text: "Flexible soft cover, smooth pages for writing comfort.",
      price: "Rs. 200",
      image: "../assets/st-img7.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Jumbo Notebook",
      text: "Extra pages for long-term use, perfect for projects.",
      price: "Rs. 400",
      image: "../assets/st-img2.png",
      button: "View Details",
      addToCart: "Add to Cart"
    }
  ],

  files: [
    {
      title: "Staples Ring File",
      text: "Durable ring file, secure binding for office documents.",
      price: "Rs. 180",
      image: "../assets/st-img8.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Clear File",
      text: "Transparent file for keeping school notes neat and safe.",
      price: "Rs. 160",
      image: "../assets/st-img9.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Hard File",
      text: "Tough cover file for long-lasting protection of papers.",
      price: "Rs. 250",
      image: "../assets/st-img10.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Clip File",
      text: "Easy clip system for quick arrangement of documents.",
      price: "Rs. 200",
      image: "../assets/st-img11.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Plastic File",
      text: "Lightweight plastic file, great for students and office.",
      price: "Rs. 120",
      image: "../assets/st-img8.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Project File",
      text: "Ideal for presentations and assignments, sleek design.",
      price: "Rs. 300",
      image: "../assets/st-img10.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Button File",
      text: "Plastic button closure file, safe storage for papers.",
      price: "Rs. 140",
      image: "../assets/st-img9.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Display File",
      text: "Multi-sheet display file for project and report work.",
      price: "Rs. 280",
      image: "../assets/st-img11.png",
      button: "View Details",
      addToCart: "Add to Cart"
    }
  ],

  staplers: [
    {
      title: "Staples Mini Stapler",
      text: "Compact stapler, lightweight design for student use.",
      price: "Rs. 100",
      image: "../assets/st-img12.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Standard Stapler",
      text: "Reliable stapler for home, school and office documents.",
      price: "Rs. 180",
      image: "../assets/st-img13.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Heavy Duty Stapler",
      text: "Strong stapler for bulk documents, office essential tool.",
      price: "Rs. 450",
      image: "../assets/st-img14.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Color Stapler",
      text: "Attractive colorful stapler, adds style to stationery kit.",
      price: "Rs. 200",
      image: "../assets/st-img15.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Desk Stapler",
      text: "Durable desk stapler, long-lasting metal body design.",
      price: "Rs. 300",
      image: "../assets/st-img16.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Classic Stapler",
      text: "Simple and sturdy stapler for everyday school use.",
      price: "Rs. 160",
      image: "../assets/st-img17.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Office Stapler",
      text: "Smooth stapling action, perfect for office work.",
      price: "Rs. 280",
      image: "../assets/st-img15.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Staples Jumbo Stapler",
      text: "Large stapler for projects, handles extra thick stacks.",
      price: "Rs. 500",
      image: "../assets/st-img14.png",
      button: "View Details",
      addToCart: "Add to Cart"
    }
  ]
};

let stapleNoteBook = document.getElementById('staples-notebook')
let stapleFile = document.getElementById('staples-files')
let stapleStapler = document.getElementById('staples-staplers')


if (stapleNoteBook) {
  let html = '';
  for (var i = 0; i < staplesProducts.notebooks.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6 auto-show">
        <div class="card">
          <img src=${staplesProducts.notebooks[i].image} class="card-img-top img-fluid" alt="">
          <div class="card-body">
            <h5>${staplesProducts.notebooks[i].title}</h5>
            <p>${staplesProducts.notebooks[i].price}</p>
            <div>
            <a href="#" class="btn btn-info">${staplesProducts.notebooks[i].button}</a>
            <a href="#" class="btn btn-primary">${staplesProducts.notebooks[i].addToCart}</a>
            </div>
          </div>
        </div>
      </div>`;

  }
  stapleNoteBook.innerHTML = html
}

if (stapleFile) {
  let html = '';
  for (var i = 0; i < staplesProducts.files.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6 auto-show ">
        <div class="card">
          <img src=${staplesProducts.files[i].image} class="card-img-top img-fluid" alt="">
          <div class="card-body">
            <h5>${staplesProducts.files[i].title}</h5>
            <p>${staplesProducts.files[i].price}</p>
            <div>
            <a href="#" class="btn btn-info">${staplesProducts.files[i].button}</a>
            <a href="#" class="btn btn-primary">${staplesProducts.files[i].addToCart}</a>
            </div>
          </div>
        </div>
      </div>`;

  }
  stapleFile.innerHTML = html
}
if (stapleStapler) {
  let html = '';
  for (var i = 0; i < staplesProducts.staplers.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6 auto-show">
        <div class="card">
          <img src=${staplesProducts.staplers[i].image} class="card-img-top img-fluid" alt="">
          <div class="card-body">
            <h5>${staplesProducts.staplers[i].title}</h5>
            <p>${staplesProducts.staplers[i].price}</p>
            <div>
            <a href="#" class="btn btn-info">${staplesProducts.staplers[i].button}</a>
            <a href="#" class="btn btn-primary ">${staplesProducts.staplers[i].addToCart}</a>
            </div>
          </div>
        </div>
      </div>`;

  }
  stapleStapler.innerHTML = html
}

let faberCastellProducts = {
  pencils: [
    {
      title: "Faber-Castell HB Pencil",
      text: "Classic HB wooden pencil, smooth writing for daily use.",
      price: "Rs. 40",
      image: "../assets/fc-img.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Faber-Castell Grip Pencil",
      text: "Ergonomic grip pencil, comfortable for long writing sessions.",
      price: "Rs. 80",
      image: "../assets/fc-img1.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Faber-Castell Colored Pencil",
      text: "Bright colors, smooth shading, perfect for school art projects.",
      price: "Rs. 350",
      image: "../assets/fc-img2.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Faber-Castell Eco Pencil",
      text: "Made from sustainable wood, eco-friendly and reliable.",
      price: "Rs. 60",
      image: "../assets/fc-img3.png",
      button: "View Details",
      addToCart: "Add to Cart"
    }
  ],

  pens: [
    {
      title: "Faber-Castell Ball Pen",
      text: "Smooth ballpoint pen, perfect for school and office writing.",
      price: "Rs. 70",
      image: "../assets/fc-img6.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Faber-Castell Gel Pen",
      text: "Premium gel ink pen, bold writing for everyday notes.",
      price: "Rs. 120",
      image: "../assets/fc-img5.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Faber-Castell Fountain Pen",
      text: "Elegant fountain pen, refillable design, smooth nib.",
      price: "Rs. 500",
      image: "../assets/fc-img4.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Faber-Castell Grip Pen",
      text: "Comfortable grip pen for long writing without hand strain.",
      price: "Rs. 150",
      image: "../assets/fc-img7.png",
      button: "View Details",
      addToCart: "Add to Cart"
    }
  ],

  colors: [
    {
      title: "Faber-Castell Crayons",
      text: "Durable wax crayons, non-toxic, great for kids artwork.",
      price: "Rs. 200",
      image: "../assets/fc-img8.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Faber-Castell Oil Pastels",
      text: "Smooth oil pastels, vibrant shades for artistic projects.",
      price: "Rs. 280",
      image: "../assets/fc-img9.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Faber-Castell Watercolors",
      text: "High quality watercolor set with bright, lasting colors.",
      price: "Rs. 500",
      image: "../assets/fc-img10.png",
      button: "View Details",
      addToCart: "Add to Cart"
    },
    {
      title: "Faber-Castell Markers",
      text: "Bold tip markers, smooth flow, perfect for projects.",
      price: "Rs. 250",
      image: "../assets/fc-img11.png",
      button: "View Details",
      addToCart: "Add to Cart"
    }
  ]
};


let faberPen = document.getElementById('faber-pen')
let faberPencil = document.getElementById('faber-pencil')
let fabercolor = document.getElementById('faber-colours')


if (faberPen) {
  let html = '';
 for(var i = 0 ;i < faberCastellProducts.pens.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6 auto-show ">
        <div class="card">
          <img src=${faberCastellProducts.pens[i].image} class="card-img-top img-fluid" alt="">
          <div class="card-body">
            <h5>${faberCastellProducts.pens[i].title}</h5>
            <p>${faberCastellProducts.pens[i].price}</p>
            <div>
            <a href="#" class="btn btn-info">${faberCastellProducts.pens[i].button}</a>
            <a href="#" class="btn btn-primary">${faberCastellProducts.pens[i].addToCart}</a>
            </div>
          </div>
        </div>
      </div>`;

  }
  faberPen.innerHTML = html
}
if (faberPencil) {
  let html = '';
  for (var i = 0; i < faberCastellProducts.pencils.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6 auto-show">
        <div class="card">
          <img src=${faberCastellProducts.pencils[i].image} class="card-img-top img-fluid" alt="">
          <div class="card-body">
            <h5>${faberCastellProducts.pencils[i].title}</h5>
            <p>${faberCastellProducts.pencils[i].price}</p>
            <div>
            <a href="#" class="btn btn-info">${faberCastellProducts.pencils[i].button}</a>
            <a href="#" class="btn btn-primary ">${faberCastellProducts.pencils[i].addToCart}</a>
            </div>
          </div>
        </div>
      </div>`;

  }
  faberPencil.innerHTML = html
}
if (fabercolor) {
  let html = '';
  for (var i = 0; i < faberCastellProducts.colors.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6 auto-show">
        <div class="card">
          <img src=${faberCastellProducts.colors[i].image} class="card-img-top img-fluid" alt="">
          <div class="card-body">
            <h5>${faberCastellProducts.colors[i].title}</h5>
            <p>${faberCastellProducts.colors[i].price}</p>
            <div>
            <a href="#" class="btn btn-info">${faberCastellProducts.colors[i].button}</a>
            <a href="#" class="btn btn-primary ">${faberCastellProducts.colors[i].addToCart}</a>
            </div>
          </div>
        </div>
      </div>`;

  }
  fabercolor.innerHTML = html
}



        // Pelikan 
let pelikanProducts = {
  pencils: [
    { title: "Pelikan HB Pencil", text: "Smooth HB pencil ideal for students and professionals.", price: "Rs. 40", image: "../assets/pl-img1.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Pelikan Exam Pencil", text: "Durable pencil made for long exam writing sessions.", price: "Rs. 50", image: "../assets/pl-img2.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Pelikan Drawing Pencil", text: "High quality pencil for sketching and shading.", price: "Rs. 70", image: "../assets/pl-img3.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Pelikan Grip Pencil", text: "Ergonomic grip for comfort in long use.", price: "Rs. 80", image: "../assets/pl-img4.png", button: "View Details", addToCart: "Add to Cart" }
  ],
  pens: [
    { title: "Pelikan Ball Pen", text: "Classic smooth writing ball pen.", price: "Rs. 150", image: "../assets/pl-img5.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Pelikan Gel Pen", text: "Premium gel pen for bold writing.", price: "Rs. 200", image: "../assets/pl-img6.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Pelikan Fountain Pen", text: "Elegant design with smooth ink flow.", price: "Rs. 2,500", image: "../assets/pl-img7.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Pelikan Ink Pen", text: "Refillable ink pen for everyday use.", price: "Rs. 600", image: "../assets/pl-img8.png", button: "View Details", addToCart: "Add to Cart" }
  ],
  colors: [
    { title: "Pelikan Crayons", text: "Bright crayons set for kids and school work.", price: "Rs. 300", image: "../assets/pl-img9.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Pelikan Oil Pastels", text: "Smooth oil pastels, vibrant shades.", price: "Rs. 400", image: "../assets/pl-img10.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Pelikan Poster Colors", text: "Water-based poster paints for art.", price: "Rs. 450", image: "../assets/pl-img11.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Pelikan Markers", text: "Bold tip markers for school projects.", price: "Rs. 500", image: "../assets/pl-img12.png", button: "View Details", addToCart: "Add to Cart" }
  ]
};

let pelikanPen = document.getElementById('pelikan-pen');
let pelikanPencil = document.getElementById('pelikan-pencil');
let pelikanColor = document.getElementById('pelikan-colours');

if (pelikanPen) {
  let html = '';
  for (let i = 0; i < pelikanProducts.pens.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6">
        <div class="card">
          <img src=${pelikanProducts.pens[i].image} class="card-img-top img-fluid" alt="">
          <div class="card-body">
            <h5>${pelikanProducts.pens[i].title}</h5>
            <p>${pelikanProducts.pens[i].price}</p>
            <div>
            <a href="#" class="btn btn-info">${pelikanProducts.pens[i].button}</a>
            <a href="#" class="btn btn-primary">${pelikanProducts.pens[i].addToCart}</a>
            </div>
          </div>
        </div>
      </div>`;
  }
  pelikanPen.innerHTML = html;
}

if (pelikanPencil) {
  let html = '';
  for (let i = 0; i < pelikanProducts.pencils.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6">
        <div class="card">
          <img src=${pelikanProducts.pencils[i].image} class="card-img-top img-fluid" alt="">
          <div class="card-body">
            <h5>${pelikanProducts.pencils[i].title}</h5>
            <p>${pelikanProducts.pencils[i].price}</p>
            <div>
            <a href="#" class="btn btn-info">${pelikanProducts.pencils[i].button}</a>
            <a href="#" class="btn btn-primary">${pelikanProducts.pencils[i].addToCart}</a>
            </div>
          </div>
        </div>
      </div>`;
  }
  pelikanPencil.innerHTML = html;
}

if (pelikanColor) {
  let html = '';
  for (let i = 0; i < pelikanProducts.colors.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6">
        <div class="card">
          <img src=${pelikanProducts.colors[i].image} class="card-img-top img-fluid" alt="">
          <div class="card-body">
            <h5>${pelikanProducts.colors[i].title}</h5>
            <p>${pelikanProducts.colors[i].price}</p>
            <div>
            <a href="#" class="btn btn-info">${pelikanProducts.colors[i].button}</a>
            <a href="#" class="btn btn-primary">${pelikanProducts.colors[i].addToCart}</a>
            </div>
          </div>
        </div>
      </div>`;
  }
  pelikanColor.innerHTML = html;
}


  //  Pilot products


  let pilotProducts = {
  pencils: [
    { title: "Pilot Super Grip Pencil", text: "Mechanical pencil with comfortable rubber grip.", price: "Rs. 300", image: "../assets/pi-img1.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Pilot Neon Pencil", text: "Bright neon body pencil, smooth writing lead.", price: "Rs. 150", image: "../assets/pi-img2.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Pilot Exam Pencil", text: "Durable pencil designed for long exam sessions.", price: "Rs. 120", image: "../assets/pi-img3.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Pilot Graphite Pencil", text: "Dark graphite pencil for clean and sharp notes.", price: "Rs. 200", image: "../assets/pi-img4.png", button: "View Details", addToCart: "Add to Cart" }
  ],
  pens: [
    { title: "Pilot G2 Gel Pen", text: "Premium gel pen with bold ink and smooth writing.", price: "Rs. 250", image: "../assets/pi-img5.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Pilot V7 Hi-Tecpoint", text: "Needle tip pen for precision writing and notes.", price: "Rs. 400", image: "../assets/pi-img6.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Pilot Fountain Pen", text: "Refillable fountain pen, elegant and smooth nib.", price: "Rs. 1,200", image: "../assets/pi-img7.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Pilot Acroball Pen", text: "Hybrid ink pen with excellent grip and smooth flow.", price: "Rs. 500", image: "../assets/pi-img8.png", button: "View Details", addToCart: "Add to Cart" }
  ],
  colors: [
    { title: "Pilot Whiteboard Marker", text: "Bold ink marker, easy erasable on whiteboards.", price: "Rs. 350", image: "../assets/pi-img9.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Pilot Permanent Marker", text: "Durable ink marker for long-lasting marks.", price: "Rs. 280", image: "../assets/pi-img10.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Pilot Highlighter", text: "Bright fluorescent highlighter for study notes.", price: "Rs. 150", image: "../assets/pi-img11.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Pilot Color Pens", text: "Set of color pens, smooth ink for projects.", price: "Rs. 600", image: "../assets/pi-img12.png", button: "View Details", addToCart: "Add to Cart" }
  ]
};

let pilotPen = document.getElementById('pilot-pen');
let pilotPencil = document.getElementById('pilot-pencil');
let pilotColor = document.getElementById('pilot-colours');

if (pilotPen) {
  let html = '';
  for (let i = 0; i < pilotProducts.pens.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6">
        <div class="card">
          <img src=${pilotProducts.pens[i].image} class="card-img-top img-fluid" alt="">
          <div class="card-body">
            <h5>${pilotProducts.pens[i].title}</h5>
            <p>${pilotProducts.pens[i].price}</p>
            <div>
            <a href="#" class="btn btn-info">${pilotProducts.pens[i].button}</a>
            <a href="#" class="btn btn-primary">${pilotProducts.pens[i].addToCart}</a>
            </div>
          </div>
        </div>
      </div>`;
  }
  pilotPen.innerHTML = html;
}

if (pilotPencil) {
  let html = '';
  for (let i = 0; i < pilotProducts.pencils.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6">
        <div class="card">
          <img src=${pilotProducts.pencils[i].image} class="card-img-top img-fluid" alt="">
          <div class="card-body">
            <h5>${pilotProducts.pencils[i].title}</h5>
            <p>${pilotProducts.pencils[i].price}</p>
            <div>
            <a href="#" class="btn btn-info">${pilotProducts.pencils[i].button}</a>
            <a href="#" class="btn btn-primary">${pilotProducts.pencils[i].addToCart}</a>
            </div>
          </div>
        </div>
      </div>`;
  }
  pilotPencil.innerHTML = html;
}

if (pilotColor) {
  let html = '';
  for (let i = 0; i < pilotProducts.colors.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6">
        <div class="card">
          <img src=${pilotProducts.colors[i].image} class="card-img-top img-fluid" alt="">
          <div class="card-body">
            <h5>${pilotProducts.colors[i].title}</h5>
            <p>${pilotProducts.colors[i].price}</p>
            <div>
            <a href="#" class="btn btn-info">${pilotProducts.colors[i].button}</a>
            <a href="#" class="btn btn-primary">${pilotProducts.colors[i].addToCart}</a>
            </div>
          </div>
        </div>
      </div>`;
  }
  pilotColor.innerHTML = html;
}




    // Staedtler products

    let staedtlerProducts = {
  pencils: [
    { title: "Staedtler Norica Pencil", text: "Durable HB pencil, smooth graphite for writing.", price: "Rs. 50", image: "../assets/st-img1.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Staedtler Mars Pencil", text: "Professional grade pencil, perfect for drawing.", price: "Rs. 100", image: "../assets/st-img2.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Staedtler Triangular Pencil", text: "Ergonomic triangular body for easy grip.", price: "Rs. 70", image: "../assets/st-img3.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Staedtler Jumbo Pencil", text: "Thick body pencil, ideal for beginners.", price: "Rs. 90", image: "../assets/st-img4.png", button: "View Details", addToCart: "Add to Cart" }
  ],
  pens: [
    { title: "Staedtler Ball Pen", text: "Smooth ballpoint pen for daily school and office.", price: "Rs. 200", image: "../assets/st-img5.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Staedtler Gel Pen", text: "Bold gel ink, comfortable grip for long writing.", price: "Rs. 300", image: "../assets/st-img6.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Staedtler Fountain Pen", text: "Classic fountain pen, durable and refillable.", price: "Rs. 1,500", image: "../assets/st-img7.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Staedtler Triplus Pen", text: "Ergonomic pen with triangular grip design.", price: "Rs. 400", image: "../assets/st-img8.png", button: "View Details", addToCart: "Add to Cart" }
  ],
  colors: [
    { title: "Staedtler Color Pencils", text: "Set of bright colored pencils for artwork.", price: "Rs. 600", image: "../assets/st-img9.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Staedtler Crayons", text: "Durable wax crayons, safe and vibrant colors.", price: "Rs. 250", image: "../assets/st-img10.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Staedtler Markers", text: "Bold markers set, smooth ink flow for projects.", price: "Rs. 500", image: "../assets/st-img11.png", button: "View Details", addToCart: "Add to Cart" },
    { title: "Staedtler Highlighters", text: "Bright highlighters for study and office notes.", price: "Rs. 350", image: "../assets/st-img12.png", button: "View Details", addToCart: "Add to Cart" }
  ]
};

let staedtlerPen = document.getElementById('staedtler-pen');
let staedtlerPencil = document.getElementById('staedtler-pencil');
let staedtlerColor = document.getElementById('staedtler-colours');

if (staedtlerPen) {
  let html = '';
  for (let i = 0; i < staedtlerProducts.pens.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6">
        <div class="card">
          <img src=${staedtlerProducts.pens[i].image} class="card-img-top img-fluid" alt="">
          <div class="card-body">
            <h5>${staedtlerProducts.pens[i].title}</h5>
            <p>${staedtlerProducts.pens[i].price}</p>
            <div>
              <a href="#" class="btn btn-info">${staedtlerProducts.pens[i].button}</a>
              <a href="#" class="btn btn-primary">${staedtlerProducts.pens[i].addToCart}</a>
            </div>
          </div>
        </div>
      </div>`;
  }
  staedtlerPen.innerHTML = html;
}

if (staedtlerPencil) {
  let html = '';
  for (let i = 0; i < staedtlerProducts.pencils.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6">
        <div class="card">
          <img src=${staedtlerProducts.pencils[i].image} class="card-img-top img-fluid" alt="">
          <div class="card-body">
            <h5>${staedtlerProducts.pencils[i].title}</h5>
            <p>${staedtlerProducts.pencils[i].price}</p>
            <div>
              <a href="#" class="btn btn-info">${staedtlerProducts.pencils[i].button}</a>
              <a href="#" class="btn btn-primary">${staedtlerProducts.pencils[i].addToCart}</a>
            </div>
          </div>
        </div>
      </div>`;
  }
  staedtlerPencil.innerHTML = html;
}

if (staedtlerColor) {
  let html = '';
  for (let i = 0; i < staedtlerProducts.colors.length; i++) {
    html += `
      <div class="col-md-3 col-sm-6">
        <div class="card">
          <img src=${staedtlerProducts.colors[i].image} class="card-img-top img-fluid" alt="">
          <div class="card-body">
            <h5>${staedtlerProducts.colors[i].title}</h5>
            <p>${staedtlerProducts.colors[i].price}</p>
            <div>
              <a href="#" class="btn btn-info">${staedtlerProducts.colors[i].button}</a>
              <a href="#" class="btn btn-primary">${staedtlerProducts.colors[i].addToCart}</a>
            </div>
          </div>
        </div>
      </div>`;
  }
  staedtlerColor.innerHTML = html;
}
  