interface Ring {
    radius: {
        inner: number;
        outer: number;
    }
}

interface Square {
    side: number;
}

const ring1: Ring = {
    radius: {
        inner: 3,
        outer: 4
    }
}

const square1: Square = {
    side: 3
}

const innerCircumference = (figure): number => 2 * Math.PI * figure.radius.inner;

innerCircumference(ring1);
innerCircumference(square1);
