module.exports = function(app, db) {
    app.get('/tickets', (req, res) => {
/*        (async function() {
            const res2 = await db.collection('tickets').find().toArray();

            res.send(res2);
        })();*/
            db.collection('tickets').find().toArray((err, items) => {
                res.send(items);
            })
    });
    app.post('/tickets', (req, res) => {
        const ticket = {
            name: req.body.name,
            title: req.body.title,
            price: req.body.price,
            count: req.body.count,
            eventTime: req.body.eventTime,
            url: req.body.url
        };
        console.log(ticket);
        db.collection('tickets').insert(ticket, (err, result) => {
            if (err) {
                res.send({'error': err});
            } else {
                res.send(result.ops[0]);
            }
        })
    })
};