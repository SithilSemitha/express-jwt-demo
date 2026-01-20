const expres = require('express');
const PORT = process.env.PORT || 3000;

const app = expres();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

