function loadPost(id){
    fetch(`/post.json?id=${$}`)
      .then((post) => setPost (post));


    fetch(`/comments.json?post_id=${id}`)
       .then((comments) => setComments(comments));
}


async function loadPost(id){
    // etot method nezavisimi i oni mogut vipolyatca poralelno
    // esli jdat kajdi zapros
    const post = await fetch(`/post.json?id=${id}`);
    setPost(post);


    const comments = await fetdch(`/comments.json?post_id=${id}`);
    setComments(comments);
}


async function loadPost(id){
    // sdes mi otpravlyaem zaprosi i patom jdyom vnizu zezultata s await
    const post =  fetch(`/post.json?id=${id}`);
    const comments =  fetch(`/comments.json?post_id=${id}`);


    setPost(await post);
    setComments(await comments);
}



