const freddoPrice = 0.36; // Price of one Freddo in GBP

        function calculateFreddos() {
            const amount = document.getElementById('amount').value;
            const freddos = Math.floor(amount / freddoPrice);
            document.getElementById('result').innerText = "You can buy " + freddos + " Freddos.";
        }
