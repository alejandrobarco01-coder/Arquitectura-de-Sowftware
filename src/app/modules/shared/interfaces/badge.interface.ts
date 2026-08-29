import { Themes } from "../../../core/interfaces/themes.interface";

/**
 * Tipo de badge basado en los temas globales de la aplicación.
 *
 * @remarks
 * Este tipo reutiliza la definición de {@link Themes} para garantizar
 * consistencia visual entre los componentes del sistema de diseño
 * y los estilos globales (Bootstrap / UI).
 *
 * Se utiliza principalmente para definir el color de fondo del badge.
 *
 * @example
 * ```ts
 * const badgeType: BadgeType = 'success';
 * ```
 */
export type BadgeType = Themes;

/**
 * Tipo de badge basado en los temas globales de la aplicación.
 *
 * @remarks
 * Este tipo reutiliza la definición de {@link Themes} para garantizar
 * consistencia visual entre los componentes del sistema de diseño
 * y los estilos globales (Bootstrap / UI).
 *
 * Se utiliza principalmente para definir el color de fondo del badge.
 *
 * @example
 * ```ts
 * const badgeType: BadgeType = 'success';
 * ```
 */
export type BadgeTypeText = 'text-white' | 'text-dark';