// time_planner.test.mjs

import { expect } from 'chai';
import { meetingPlanner } from '../questions/js/time_planner.js';

describe('meetingPlanner', () => {
    it('should return the correct time slot when there is a common time slot of the required duration', () => {
        const slotsA = [[10, 50], [60, 120], [140, 210]];
        const slotsB = [[0, 15], [60, 70]];
        const dur = 8;
        const result = meetingPlanner(slotsA, slotsB, dur);
        expect(result).to.deep.equal([60, 68]);
    });

    it('should return an empty array when there is no common time slot of the required duration', () => {
        const slotsA = [[10, 50], [60, 120], [140, 210]];
        const slotsB = [[0, 15], [60, 70]];
        const dur = 12;
        const result = meetingPlanner(slotsA, slotsB, dur);
        expect(result).to.deep.equal([]);
    });

    it('should return the earliest time slot when there are multiple valid time slots', () => {
        const slotsA = [[10, 50], [60, 120], [140, 210]];
        const slotsB = [[0, 15], [60, 70], [80, 90]];
        const dur = 5;
        const result = meetingPlanner(slotsA, slotsB, dur);
        expect(result).to.deep.equal([10, 15]);
    });
});