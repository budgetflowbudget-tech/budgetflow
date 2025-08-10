const ctx = document.getElementById('budgetChart').getContext('2d');
const budgetChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Housing', 'Food', 'Transportation', 'Entertainment', 'Other'],
        datasets: [{
            label: 'Spending',
            data: [1200, 600, 300, 200, 150],
            backgroundColor: ['#4dc9f6','#f67019','#f53794','#537bc4','#acc236']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});
