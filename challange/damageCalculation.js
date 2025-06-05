/**
 * Damage Calculations
 * 
 */

function attack (damage) {
    let enemiesArmor = 2
    let effectiveAttackDamage = damage - enemiesArmor
    return effectiveAttackDamage
};

function damageCalculation (numberOfAttack, damagePerAttack) {
    let totalAttackDamage = attack(damagePerAttack) * numberOfAttack
    return  totalAttackDamage
};

console.log(damageCalculation(9, 25))
console.log(damageCalculation(10, 4))
console.log(damageCalculation(5, 20))