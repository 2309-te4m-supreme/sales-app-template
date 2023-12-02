const products = [
    {"product_id":1,
    "product_name":"Bread - Raisin",
    "product_description":"Sed sagittis.",
    "product_price":"9.70",
    "product_image":"http://dummyimage.com/112x100.png/5fa2dd/ffffff",
    "product_category":"jewelry",
    "product_stock":301},
{"product_id":2,"product_name":"Pepper - White, Whole","product_description":"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.","product_price":"6.22","product_image":"http://dummyimage.com/109x100.png/cc0000/ffffff","product_category":"jewelry","product_stock":545},
{"product_id":3,"product_name":"Broom And Brush Rack Black","product_description":"Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.","product_price":"0.30","product_image":"http://dummyimage.com/150x100.png/ff4444/ffffff","product_category":"jewelry","product_stock":713},
{"product_id":4,"product_name":"Yokaline","product_description":"Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc.","product_price":"19.61","product_image":"http://dummyimage.com/186x100.png/dddddd/000000","product_category":"bathbombs","product_stock":757},
{"product_id":5,"product_name":"Island Oasis - Cappucino Mix","product_description":"Suspendisse potenti.","product_price":"14.24","product_image":"http://dummyimage.com/193x100.png/dddddd/000000","product_category":"jewelry","product_stock":156},
{"product_id":6,"product_name":"Wasabi Powder","product_description":"Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.","product_price":"17.53","product_image":"http://dummyimage.com/146x100.png/5fa2dd/ffffff","product_category":"bathbombs","product_stock":935},
{"product_id":7,"product_name":"Lady Fingers","product_description":"Nulla justo.","product_price":"2.17","product_image":"http://dummyimage.com/186x100.png/ff4444/ffffff","product_category":"bathbombs","product_stock":156},
{"product_id":8,"product_name":"Sambuca - Ramazzotti","product_description":"Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.","product_price":"13.85","product_image":"http://dummyimage.com/190x100.png/dddddd/000000","product_category":"bathbombs","product_stock":396},
{"product_id":9,"product_name":"Coffee Cup 8oz 5338cd","product_description":"Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.","product_price":"19.94","product_image":"http://dummyimage.com/142x100.png/dddddd/000000","product_category":"bathbombs","product_stock":284},
{"product_id":10,"product_name":"Chocolate - Feathers","product_description":"Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.","product_price":"1.23","product_image":"http://dummyimage.com/217x100.png/5fa2dd/ffffff","product_category":"jewelry","product_stock":939},
{"product_id":11,"product_name":"Chicken - Base","product_description":"Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.","product_price":"5.02","product_image":"http://dummyimage.com/201x100.png/5fa2dd/ffffff","product_category":"jewelry","product_stock":744},
{"product_id":12,"product_name":"Yeast Dry - Fleischman","product_description":"Nulla facilisi. Cras non velit nec nisi vulputate nonummy.","product_price":"3.49","product_image":"http://dummyimage.com/149x100.png/5fa2dd/ffffff","product_category":"jewelry","product_stock":171},
{"product_id":13,"product_name":"Melon - Watermelon Yellow","product_description":"Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.","product_price":"6.34","product_image":"http://dummyimage.com/103x100.png/cc0000/ffffff","product_category":"jewelry","product_stock":22},
{"product_id":14,"product_name":"Oil - Food, Lacquer Spray","product_description":"Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum.","product_price":"15.31","product_image":"http://dummyimage.com/232x100.png/dddddd/000000","product_category":"bathbombs","product_stock":681},
{"product_id":15,"product_name":"Grapes - Green","product_description":"In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa.","product_price":"7.32","product_image":"http://dummyimage.com/221x100.png/ff4444/ffffff","product_category":"jewelry","product_stock":818},
{"product_id":16,"product_name":"Flour - So Mix Cake White","product_description":"Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.","product_price":"1.19","product_image":"http://dummyimage.com/182x100.png/5fa2dd/ffffff","product_category":"jewelry","product_stock":686},
{"product_id":17,"product_name":"Liners - Baking Cups","product_description":"Nunc purus.","product_price":"10.35","product_image":"http://dummyimage.com/235x100.png/5fa2dd/ffffff","product_category":"bathbombs","product_stock":845},
{"product_id":18,"product_name":"Chocolate - Unsweetened","product_description":"Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.","product_price":"13.17","product_image":"http://dummyimage.com/164x100.png/ff4444/ffffff","product_category":"jewelry","product_stock":10},
{"product_id":19,"product_name":"Passion Fruit","product_description":"Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.","product_price":"18.55","product_image":"http://dummyimage.com/224x100.png/dddddd/000000","product_category":"jewelry","product_stock":953},
{"product_id":20,"product_name":"Wine - Niagara,vqa Reisling","product_description":"Suspendisse potenti. Cras in purus eu magna vulputate luctus.","product_price":"11.73","product_image":"http://dummyimage.com/210x100.png/cc0000/ffffff","product_category":"jewelry","product_stock":438},
{"product_id":21,"product_name":"Wanton Wrap","product_description":"Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.","product_price":"9.15","product_image":"http://dummyimage.com/103x100.png/5fa2dd/ffffff","product_category":"jewelry","product_stock":154},
{"product_id":22,"product_name":"Table Cloth 53x69 White","product_description":"Duis bibendum. Morbi non quam nec dui luctus rutrum.","product_price":"17.50","product_image":"http://dummyimage.com/170x100.png/ff4444/ffffff","product_category":"bathbombs","product_stock":934},
{"product_id":23,"product_name":"Rice Paper","product_description":"Ut at dolor quis odio consequat varius.","product_price":"13.95","product_image":"http://dummyimage.com/152x100.png/dddddd/000000","product_category":"bathbombs","product_stock":136},
{"product_id":24,"product_name":"Bread Bowl Plain","product_description":"Pellentesque at nulla.","product_price":"18.84","product_image":"http://dummyimage.com/158x100.png/5fa2dd/ffffff","product_category":"jewelry","product_stock":55},
{"product_id":25,"product_name":"Soup - Beef, Base Mix","product_description":"Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.","product_price":"6.92","product_image":"http://dummyimage.com/250x100.png/5fa2dd/ffffff","product_category":"bathbombs","product_stock":694},
{"product_id":26,"product_name":"Soup - French Onion, Dry","product_description":"Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.","product_price":"14.39","product_image":"http://dummyimage.com/194x100.png/cc0000/ffffff","product_category":"jewelry","product_stock":102},
{"product_id":27,"product_name":"Sauce - Cranberry","product_description":"Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.","product_price":"0.86","product_image":"http://dummyimage.com/151x100.png/dddddd/000000","product_category":"bathbombs","product_stock":597},
{"product_id":28,"product_name":"Bread - Ciabatta Buns","product_description":"Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.","product_price":"8.12","product_image":"http://dummyimage.com/174x100.png/cc0000/ffffff","product_category":"bathbombs","product_stock":233},
{"product_id":29,"product_name":"Pork - Side Ribs","product_description":"In sagittis dui vel nisl.","product_price":"8.13","product_image":"http://dummyimage.com/124x100.png/cc0000/ffffff","product_category":"bathbombs","product_stock":837},
{"product_id":30,"product_name":"Molasses - Fancy","product_description":"Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.","product_price":"17.60","product_image":"http://dummyimage.com/175x100.png/5fa2dd/ffffff","product_category":"bathbombs","product_stock":575},
{"product_id":31,"product_name":"Toothpick Frilled","product_description":"Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.","product_price":"6.74","product_image":"http://dummyimage.com/195x100.png/ff4444/ffffff","product_category":"jewelry","product_stock":413},
{"product_id":32,"product_name":"Honey - Liquid","product_description":"In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl.","product_price":"9.08","product_image":"http://dummyimage.com/249x100.png/dddddd/000000","product_category":"bathbombs","product_stock":548},
{"product_id":33,"product_name":"Pasta - Ravioli","product_description":"Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices.","product_price":"14.07","product_image":"http://dummyimage.com/162x100.png/5fa2dd/ffffff","product_category":"bathbombs","product_stock":805},
{"product_id":34,"product_name":"Oil - Peanut","product_description":"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.","product_price":"6.20","product_image":"http://dummyimage.com/186x100.png/ff4444/ffffff","product_category":"bathbombs","product_stock":749},
{"product_id":35,"product_name":"Pepper - Scotch Bonnet","product_description":"Quisque id justo sit amet sapien dignissim vestibulum.","product_price":"11.06","product_image":"http://dummyimage.com/230x100.png/cc0000/ffffff","product_category":"jewelry","product_stock":945},
{"product_id":36,"product_name":"Venison - Denver Leg Boneless","product_description":"Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.","product_price":"4.91","product_image":"http://dummyimage.com/225x100.png/cc0000/ffffff","product_category":"bathbombs","product_stock":957},
{"product_id":37,"product_name":"Muffin Mix - Corn Harvest","product_description":"Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.","product_price":"13.04","product_image":"http://dummyimage.com/139x100.png/cc0000/ffffff","product_category":"bathbombs","product_stock":521},
{"product_id":38,"product_name":"Bread - 10 Grain Parisian","product_description":"Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.","product_price":"9.82","product_image":"http://dummyimage.com/239x100.png/cc0000/ffffff","product_category":"jewelry","product_stock":833},
{"product_id":39,"product_name":"Wine - Periguita Fonseca","product_description":"Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.","product_price":"10.42","product_image":"http://dummyimage.com/224x100.png/ff4444/ffffff","product_category":"jewelry","product_stock":558},
{"product_id":40,"product_name":"Salami - Genova","product_description":"Cras non velit nec nisi vulputate nonummy.","product_price":"16.47","product_image":"http://dummyimage.com/133x100.png/ff4444/ffffff","product_category":"bathbombs","product_stock":691},
{"product_id":41,"product_name":"Watercress","product_description":"Maecenas rhoncus aliquam lacus.","product_price":"5.43","product_image":"http://dummyimage.com/231x100.png/cc0000/ffffff","product_category":"jewelry","product_stock":633},
{"product_id":42,"product_name":"Clams - Bay","product_description":"In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst.","product_price":"7.18","product_image":"http://dummyimage.com/197x100.png/cc0000/ffffff","product_category":"bathbombs","product_stock":68},
{"product_id":43,"product_name":"Wine - Crozes Hermitage E.","product_description":"Morbi porttitor lorem id ligula.","product_price":"9.30","product_image":"http://dummyimage.com/158x100.png/dddddd/000000","product_category":"bathbombs","product_stock":214},
{"product_id":44,"product_name":"Bread - Rye","product_description":"Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.","product_price":"10.54","product_image":"http://dummyimage.com/195x100.png/5fa2dd/ffffff","product_category":"jewelry","product_stock":990},
{"product_id":45,"product_name":"Pork - Ham, Virginia","product_description":"Vestibulum sed magna at nunc commodo placerat. Praesent blandit.","product_price":"6.75","product_image":"http://dummyimage.com/104x100.png/dddddd/000000","product_category":"jewelry","product_stock":53},
{"product_id":46,"product_name":"Vol Au Vents","product_description":"In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.","product_price":"1.05","product_image":"http://dummyimage.com/153x100.png/cc0000/ffffff","product_category":"jewelry","product_stock":859},
{"product_id":47,"product_name":"Fenngreek Seed","product_description":"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.","product_price":"11.26","product_image":"http://dummyimage.com/175x100.png/cc0000/ffffff","product_category":"jewelry","product_stock":443},
{"product_id":48,"product_name":"Uniform Linen Charge","product_description":"Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.","product_price":"8.49","product_image":"http://dummyimage.com/195x100.png/cc0000/ffffff","product_category":"jewelry","product_stock":100},
{"product_id":49,"product_name":"Danishes - Mini Cheese","product_description":"Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.","product_price":"6.66","product_image":"http://dummyimage.com/231x100.png/5fa2dd/ffffff","product_category":"bathbombs","product_stock":650},
{"product_id":50,"product_name":"Raisin - Dark","product_description":"Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.","product_price":"7.62","product_image":"http://dummyimage.com/230x100.png/5fa2dd/ffffff","product_category":"bathbombs","product_stock":991}]

module.exports = { products }
