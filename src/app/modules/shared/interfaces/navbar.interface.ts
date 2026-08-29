/**
 * Representa un ítem de navegación dentro del Navbar.
 *
 * @remarks
 * Esta interfaz se utiliza para construir dinámicamente
 * los enlaces del componente {@link NavbarComponent}.
 *
 * Cada ítem define el texto visible y la ruta asociada
 * dentro del sistema de ruteo de Angular.
 *
 * @example
 * ```ts
 * const item: NavbarItem = {
 *   label: 'Usuarios',
 *   url: '/users'
 * };
 * ```
 */
export interface NavbarItem {
    /**
     * Texto que se muestra en la opción del menú.
     */
    label: string;

    /**
     * Ruta asociada al ítem de navegación.
     *
     * @remarks
     * Debe coincidir con una ruta configurada en el RouterModule.
     */
    url: string;
}