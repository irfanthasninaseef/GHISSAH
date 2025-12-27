// GHISSAH - Core Utilities
console.log("Ghissah Core Loaded");

/**
 * Formats a number into Indian Rupee currency string.
 * Usage: formatCurrency(12500) -> "₹12,500"
 * @param {number} amount 
 * @returns {string}
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0 // No decimals for clean luxury look
    }).format(amount);
}
