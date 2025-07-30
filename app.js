
document.getElementById('reviewForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const movie = document.getElementById('movie').value;
    const rating = document.getElementById('rating').value;
    const comment = document.getElementById('comment').value;

    await fetch('http://localhost:5000/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ movie, rating, comment })
    });

    loadReviews();
});

async function loadReviews() {
    const res = await fetch('http://localhost:5000/reviews');
    const data = await res.json();
    const container = document.getElementById('reviews');
    container.innerHTML = data.map(r => \`<p><strong>\${r.movie}</strong>: \${r.rating}/5 - \${r.comment}</p>\`).join('');
}

loadReviews();
