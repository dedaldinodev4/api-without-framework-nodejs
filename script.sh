echo '\n\n requesting all heroes'
curl localhost:3000/heroes

echo '\n\n requesting Iron Man'
curl localhost:3000/heroes/1649362279112


echo '\n\n requesting with wrong body'
curl --silent -X POST \
    --data-binary '{"invalid": "data"}' \
    localhost:3000/heroes

echo '\n\n creating Thor'
CREATE=$(curl --silent -X POST \
    --data-binary '{ "name": "Thor", "age": 60, "power": "God Ragnerok"}' \
    localhost:3000/heroes)


echo $CREATE

ID=$(echo $CREATE)

echo $ID