# cli-calc (A basic calculator)
This is a simple calculator build in nodejs

## How to setup and run the project
You need either [docker](https://www.docker.com/products/docker-desktop) or [nodejs](https://nodejs.org/en/download/) to run the project.

```bash
# clone project
git clone https://github.com/benhurdavies/cli-calc.git

# change to project directory 
cd cli-calc
```

### With Docker environment 
```bash
# to run the project
docker-compose run calc

# to run the tests
docker-compose run calc npm test
```

### With local nodejs
```bash
# install dependencies 
npm i

# to run the project
npm start

# to run the tests
npm test
```
