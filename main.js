// class Human {
//     constructor(talks, walks, weights, colorOfskin, gender) {
//         this.talks = talks;
//         this.weights = weights;
//         this.walks = walks;
//         this.colorOfskin = colorOfskin;
//         this.gender = gender
//     }
// }

// // class Woman extends Human {
// //     constructor(talks, walks, weights, colorOfskin, gender, job, usage) {
// //         super(talks, walks, weights, colorOfskin);
// //         this.job = job;
// //         this.gender = gender;
// //         this.usage = usage;
// //     }
// // }

// class Woman extends Human {
//     constructor(talks, walks, weights, colorOfskin, gender) {
//         super(talks, walks, weights, colorOfskin);
//         this.job = job;
//         this.gender = gender;
//         this.usage = usage;
//     }
// }

// class Nurse extends Woman {
//     constructor(talks, walks, weights, colorOfskin, gender, takingCareOfAnimals) {
//         super(talks, walks, weights, colorOfskin, gender);
//         this.takingCareOfAnimals = takingCareOfAnimals;
//     }
// }

// class Librarian extends Woman {
//     constructor(talks, walks, weights, colorOfskin, gender, archive) {
//         super(talks, walks, weights, colorOfskin, gender);
//         this.archive = archive;
//     }
// }

// class Man extends Human {
//     constructor(talks, walks, weights, colorOfskin, gender, job, usage) {
//         super(talks, walks, weights, colorOfskin);
//         this.job = job
//         this.gender = gender;
//         this.usage = usage;
//     }
// }

// class Animal {
//     constructor(walks, runs, hasFur) {
//         this.walks = walks,
//         this.runs = runs,
//         this.hasFur = hasFur
//     }
// }

// class Herbivorous extends Animal {
//     constructor(walks, runs, hasFur, eatsPlants, eastsMeat, type, takesCareOfthem) {
//         super(walks, runs, hasFur);
//         this.eatsPlants = eatsPlants;
//         this.eastsMeat = eastsMeat;
//         this.takesCareOfthem = takesCareOfthem;
//         this.type = type;
//     }
// }

// class Predator extends Animal {
//     constructor(walks, runs, hasFur, eatsPlants, eastsMeat, type, takesCareOfthem) {
//         super(walks, runs, hasFur);
//         this.eatsPlants = eatsPlants;
//         this.eastsMeat = eastsMeat;
//         this.takesCareOfthem = takesCareOfthem;
//         this.type = type;
//     }
// }

// const zoo = (function(){
//     let jobs = ['janitor', 'nurse', 'manager', 'care taker of predators', 'taker care of herbivorous'];
//     let animals = []
//     let workers = [];
//     function applyWorker() {
//         const worker1 = new Man(true, true, '80kg', 'white', 'man', jobs[0], 'cleaning teretory');
//         const worker2 = new Woman(true, true, '65kg', 'black', 'woman', jobs[1], 'looking after animals');
//         const worker3 = new Woman(true, true, '70kg', 'black', 'woman', jobs[2], 'managing whole system');
//         const worker4 = new Man(true, true, '75kg', 'white', 'man', jobs[3], 'takes care of predators');
//         const worker5 = new Man(true, true, '75kg', 'white', 'woman', jobs[4], 'takes care of herbivorous');
//         const animals1 = new Predator(false, false, false, false, true, 'shark', 'taker care of predators');
//         const animals2 = new Predator(true, true, true, true, true, 'lions', 'taker care of predators');
//         const animals3 = new Predator(true, true, false, true, true, 'tigers', 'taker care of predators');
//         const animals4 = new Herbivorous(true, false, false, true, false, 'flamingos', 'taker care of herbivorous');
//         const animals5 = new Herbivorous(true,  true, false, true, true, 'ostrich', 'taker care of herbivorous');
//         workers.push(worker1, worker2, worker3, worker4, worker5);
//         animals.push(animals1, animals2, animals3, animals4, animals5);
//     }

//     function showInfo() {
//         for (let i = 0; i < workers.length; i++) {
//             console.log(
//                 `about his job: ${workers[i].job} and he does work such as ${workers[i].usage}
//                 about him: persons weight is ${workers[i].weights}, persons color of skin is ${workers[i].colorOfskin},
//                 persons gender is ${workers[i].gender}
//                 `
//             );
//         }

//         for (let i = 0; i < animals.length; i++) {
//             console.log(`animals in zoo: ${animals[i].type}, care taker: ${animals[i].takesCareOfthem}`);
//         }
//     }

//     return {
//         applyWorker: applyWorker,
//         showInfo: showInfo
//     }
// }())

// function init () {
//     zoo.applyWorker();
//     zoo.showInfo();
// }

// init();



class Human {
    constructor(talks, walks, weights, colorOfskin, gender) {
        this.talks = talks;
        this.weights = weights;
        this.walks = walks;
        this.colorOfskin = colorOfskin;
        this.gender = gender
    }
}

class Woman extends Human {
    constructor(talks, walks, weights, colorOfskin, gender) {
        super(talks, walks, weights, colorOfskin);
        this.gender = gender;
    }
}

class Nurse extends Woman {
    constructor(talks, walks, weights, colorOfskin, gender, takingCareOfAnimals, usage, job, animalsArr) {
        super(talks, walks, weights, colorOfskin, gender);
        this.takingCareOfAnimals = takingCareOfAnimals;
        this.usage = usage;
        this.job = job;
        this.animalsArr = animalsArr;
    }
}

class Librarian extends Woman {
    constructor(talks, walks, weights, colorOfskin, gender, archive, usage, job) {
        super(talks, walks, weights, colorOfskin, gender);
        this.archive = archive;
        this.usage = usage;
        this.job = job;
    }
}

class Man extends Human {
    constructor(talks, walks, weights, colorOfskin, gender) {
        super(talks, walks, weights, colorOfskin);
        this.gender = gender;
    }
}

class Hunter extends Man {
    constructor(talks, walks, weights, colorOfskin, gender, catchesAnimals, usage, job) {
        super(talks, walks, weights, colorOfskin, gender);
        this.catchesAnimals = catchesAnimals;
        this.usage = usage;
        this.job = job;
    }
}

class Worker extends Man {
    constructor(talks, walks, weights, colorOfskin, gender, takingCare, usage, job, animalsArr) {
        super(talks, walks, weights, colorOfskin, gender, job);
        this.takingCare = takingCare;
        this.usage = usage;
        this.job = job;
        this.animalsArr = animalsArr;
    }
}

class Animal {
    constructor(walks, runs, hasFur, type) {
        this.walks = walks;
        this.runs = runs;
        this.hasFur = hasFur;
        this.type = type;
    }
}

class Herbivorous extends Animal {
    constructor(walks, runs, hasFur, eatsPlants, eastsMeat, type) {
        super(walks, runs, hasFur, type);
        this.eatsPlants = eatsPlants;
        this.eastsMeat = eastsMeat;
    }
}

class Predator extends Animal {
    constructor(walks, runs, hasFur, eatsPlants, eastsMeat, type) { 
        super(walks, runs, hasFur, type);
        this.eatsPlants = eatsPlants;
        this.eastsMeat = eastsMeat;
    }
}

const zoo = (function() {
    let jobs = [];
    let animals = [];
    function animalsWorkers() { 
    const librarian = new Librarian(true, true, '74kg', 'black', 'woman', true, 'modifies archive', 'librarian');
    const hunter = new Hunter(true, true, '80kg', 'white', 'man', true, 'catches animals', 'hunter');
    const nurse = new Nurse(true, true, '75kg', 'white', 'woman', true, 'heels animals', 'nurse', animals);
    const worker = new Worker(true, true, '84kg', 'white', 'man',  true, 'taking care of animals', 'worker', animals);
    const animal1 = new Herbivorous(true, true, true, true, true, 'lion');
    const animal2 = new Herbivorous(true, true, true, true, true, 'tiger');
    const animal3 = new Herbivorous(true, true, true, true, true, 'puma');
    animals.push(animal1, animal2, animal3);
    jobs.push(nurse, librarian, hunter, worker);
}

function showInfo() {
    let string = '';
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i]) {
             console.log(`${jobs[i].job} persons work is ${jobs[i].usage}`);
        }   
    }
    for (let i = 0; i < animals.length; i++) {
        string += animals[i].type + ', ';
    }
    console.log(`animals in zoo: ${string}`);
}

return {
    animalsWorkers: animalsWorkers,
    showInfo: showInfo
}
}())


function init() {
    zoo.animalsWorkers();
    zoo.showInfo()
}

init();