var products = [
  {
    prodName: '512kb USB stick',
    description: 'a very tiny usb stick, with two episodes of Friends recorded in 144p',
    price: '$2.99',
    category: 'Under5',
    prodURL: 'images/512kbUSB.png'
  },
  {
    prodName: 'banana',
    description: 'a perfectly good banana',
    price: '$5.00',
    category: '5Dollars',
    prodURL: 'images/banana.png'
  },
  {
    prodName: 'Broken Chair',
    description: 'a busted office chair, cat fur included',
    price: '$5.00',
    category: '5Dollars',
    prodURL: 'images/brokenchair.png'
  },
  {
    prodName: 'Candy Wrapper',
    description: 'no candy left, just the wrapper',
    price: '$0.14',
    category: 'Under5',
    prodURL: 'images/candywrapper.png'
  },
  {
    prodName: 'Framed Picture of Data',
    description: 'a framed picture of Data from Star Trek: The Next Generation',
    price: '$5.00',
    category: 'OutOfStock',
    prodURL: 'images/data.png'
  },
  {
    prodName: 'Fidget Spinner',
    description: "just a fidget spinner, it's sticky",
    price: '$1.99',
    category: 'Under5',
    prodURL: 'images/fidgetspinner.png'
  },
  {
    prodName: 'Jos Louis',
    description: 'a Canadian treat',
    price: '$5.00',
    category: '5Dollars',
    prodURL: 'images/joslouis.png'
  },
  {
    prodName: 'Phone Number on a Napkin',
    description: 'whos phone number is this?',
    price: '$5.00',
    category: '5Dollars',
    prodURL: 'images/phonenumber.png'
  },
  {
    prodName: 'Broken Tech Deck',
    description: "It's been snapped in three",
    price: '$5.00',
    category: '5Dollars',
    prodURL: 'images/techdeck.png'
  },
  {
    prodName: 'An Ugly Cat',
    description: 'There is a weird stray cat outside, looks like grandma',
    price: '$4.20',
    category: 'Under5',
    prodURL: 'images/uglycat.png'
  }
];

function cardMaker(sortBy = 'none') {
  for (let i in products) {
    let divItems = document.createElement('div');
    let h5Items = document.createElement('h5');
    let iItems = document.createElement('i');
    let img = document.createElement('img');
    let divDesc = document.createElement('div');
    let par = document.createElement('p');
    let line = document.createElement('hr');
    let line2 = document.createElement('hr');
    divItems.className = 'items';
    divDesc.className = 'itemDesc';
    img.className = 'imgs';

    if (sortBy === 'none') {
      h5Items.innerHTML = products[i].prodName;
      iItems.innerHTML = products[i].description;
      par.innerHTML = products[i].price;
      img.src = products[i].prodURL;
      divDesc.appendChild(h5Items);
      divDesc.appendChild(line);
      divDesc.appendChild(iItems);
      divDesc.appendChild(line2);
      divDesc.appendChild(par);
      divItems.appendChild(img);
      divItems.appendChild(divDesc);
      document.getElementById('products').appendChild(divItems);
    } else if (sortBy === 'Under5') {
      if (products[i].category === 'Under5') {
        h5Items.innerHTML = products[i].prodName;
        iItems.innerHTML = products[i].description;
        par.innerHTML = products[i].price;
        img.src = products[i].prodURL;
        divDesc.appendChild(h5Items);
        divDesc.appendChild(line);
        divDesc.appendChild(iItems);
        divDesc.appendChild(line2);
        divDesc.appendChild(par);
        divItems.appendChild(img);
        divItems.appendChild(divDesc);
        document.getElementById('products').appendChild(divItems);
      }
    } else if (sortBy === '5Dollars') {
      if (products[i].category === '5Dollars') {
        h5Items.innerHTML = products[i].prodName;
        iItems.innerHTML = products[i].description;
        par.innerHTML = products[i].price;
        img.src = products[i].prodURL;
        divDesc.appendChild(h5Items);
        divDesc.appendChild(line);
        divDesc.appendChild(iItems);
        divDesc.appendChild(line2);
        divDesc.appendChild(par);
        divItems.appendChild(img);
        divItems.appendChild(divDesc);
        document.getElementById('products').appendChild(divItems);
      }
    } else if (sortBy === 'OutOfStock') {
      if (products[i].category === 'OutOfStock') {
        h5Items.innerHTML = products[i].prodName;
        iItems.innerHTML = products[i].description;
        par.innerHTML = products[i].price;
        img.src = products[i].prodURL;
        divDesc.appendChild(h5Items);
        divDesc.appendChild(line);
        divDesc.appendChild(iItems);
        divDesc.appendChild(line2);
        divDesc.appendChild(par);
        divItems.appendChild(img);
        divItems.appendChild(divDesc);
        document.getElementById('products').appendChild(divItems);
      }
    }
  }
}

function click() {
  var subtitle = document.createElement('h3');
  subtitle.id = 'subtitle';
  document.getElementById('subtitle').appendChild(document.createTextNode('HOME'));

  document.getElementById('home').addEventListener('click', function() {
    while (document.getElementById('products').firstChild) {
      document.getElementById('products').lastChild.remove();
    }
    subtitle.innerHTML = 'HOME';
    document.getElementById('products').appendChild(subtitle);
    cardMaker();
  });
  document.getElementById('Under5').addEventListener('click', function() {
    while (document.getElementById('products').firstChild) {
      document.getElementById('products').lastChild.remove();
    }
    subtitle.innerHTML = 'UNDER $5.00';
    document.getElementById('products').appendChild(subtitle);
    cardMaker('Under5');
  });
  document.getElementById('5Dollars').addEventListener('click', function() {
    while (document.getElementById('products').firstChild) {
      document.getElementById('products').lastChild.remove();
    }
    subtitle.innerHTML = '$5.00 EXACTLY';
    document.getElementById('products').appendChild(subtitle);
    cardMaker('5Dollars');
  });
  document.getElementById('OutOfStock').addEventListener('click', function() {
    while (document.getElementById('products').firstChild) {
      document.getElementById('products').lastChild.remove();
    }
    subtitle.innerHTML = 'OUT OF STOCK';
    document.getElementById('products').appendChild(subtitle);
    cardMaker('OutOfStock');
  });
}

cardMaker();
window.onload = click;
