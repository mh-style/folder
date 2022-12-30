let posted = document.querySelectorAll('.posted');
for (let i = 0; i < posted.length; i++) {
    let posted_text = posted[i].querySelectorAll('.text-posted');
    let posted_img_body = posted[i].querySelector('.img-posted');
    let posted_img = posted_img_body.querySelectorAll('img');
    try {
        if (1 >= posted_img.length) {
            posted_img_body.classList.add('img-posted-1');
        } else if (2 >= posted_img.length) {
            posted_img_body.classList.add('img-posted-2');
        } else if (3 >= posted_img.length) {
            posted_img_body.classList.add('img-posted-3');
        } else if (4 >= posted_img.length) {
            posted_img_body.classList.add('img-posted-4');
        } else {
            posted_img_body.classList.add('img-posted-4m');
            let count_posted_img = document.createElement("a");
            count_posted_img.classList.add('count_posted_img');
            posted_img_body.appendChild(count_posted_img);
            let ccc = posted_img_body.querySelector('.count_posted_img');
            ccc.textContent = ('+') + (posted_img.length - 3);
        }

    } catch {}
    // I changed the name of function, in order to be more meaningfull.

}