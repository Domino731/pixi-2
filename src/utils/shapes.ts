/**
 * Checks if the point (x, y) is within the rectangle defined by shapeX, shapeY, width, and height.
 *
 * @param {number} x - The x-coordinate of the point.
 * @param {number} y - The y-coordinate of the point.
 * @param {number} shapeX - The x-coordinate of the top-left corner of the rectangle.
 * @param {number} shapeY - The y-coordinate of the top-left corner of the rectangle.
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @returns {boolean} True if the point is within the rectangle, false otherwise.
 */
export function isPointInRectangle(x: number, y: number, shapeX: number, shapeY: number, width: number, height: number): boolean {
    return (x >= shapeX && x <= shapeX + width) && (y >= shapeY && y <= shapeY + height);
}