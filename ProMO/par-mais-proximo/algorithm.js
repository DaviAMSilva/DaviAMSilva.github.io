function closestPair(arg) {
    var points = [...arg];
    points.sort((a, b) => { return Math.sign(a.x - b.x) });

    var minOne = { minDist: Infinity, minPair },
        minTwo = { minDist: Infinity, minPair },
        d;

    switch (points.length) {
        case undefined: case 0: case 1:
            console.error("Um conjunto com um número inválido de elementos (" + points.length + ") foi encontrado");
            return;

        case 2:
            minOne = { minDist: p5.Vector.dist(...points), minPair: points };
            break;

        case 3:
            var minDist = p5.Vector.dist(points[0], points[1]); var minPair = [points[0], points[1]];
            if ((d = p5.Vector.dist(points[0], points[2])) < minDist) {
                minDist = d; minPair = [points[0], points[2]];
            }
            if ((d = p5.Vector.dist(points[1], points[2])) < minDist) {
                minDist = d; minPair = [points[1], points[2]];
            }

            minOne = { minDist: minDist, minPair: minPair };
            break;

        default:
            var pGroup = points.slice(0, ceil(points.length / 2));
            var qGroup = points.slice(ceil(points.length / 2));

            var minP = closestPair(pGroup);
            var minQ = closestPair(qGroup);

            var minPair = minP.minDist < minQ.minDist ? minP.minPair : minQ.minPair;
            
            minOne = { minDist: min(minP.minDist,minQ.minDist), minPair };

            var yGroup1 = points.filter((p) => {
                return (p.x >= pGroup[pGroup.length - 1].x - minOne.minDist && p.x <= pGroup[pGroup.length - 1].x)
            });
            var yGroup2 = points.filter((p) => {
                return (p.x <= pGroup[pGroup.length - 1].x + minOne.minDist && p.x > pGroup[pGroup.length - 1].x)
            });
            if (yGroup2.length === 0) break;

            var minDist = minOne.minDist;
            for (const p1 of yGroup1) {
                for (const p2 of yGroup2) {
                    if (abs(p1.y - p2.y) < 2 * minOne.minDist && (d = p5.Vector.dist(p1, p2)) < minDist) {
                        minDist = d;
                        minPair = [p1, p2];
                    }
                }
            }

            minTwo = { minDist: minDist, minPair: minPair };
            break;
    }

    return minOne.minDist < minTwo.minDist ? { minDist: minOne.minDist, minPair: minOne.minPair } : { minDist: minTwo.minDist, minPair: minTwo.minPair };
}