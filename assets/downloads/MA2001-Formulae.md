# MA2001 - Formulae

> MA2001 · MECHANICS OF MATERIALS — exported from Lousy Engineering

---

## Stress

Untitled  

### Solving of Stresses

**Method of Joints**  
Forces acting on a joint can be expressed in the form of a force triangle if it’s in equilibrium.  
Forces can be solved using ratio of length or sine rule.  

$\frac{F_A}{L_A}= \frac{F_B}{L_B}= \frac{F_C}{L_C}$  
$\frac{F_A}{sin\theta_A}= \frac{F_B}{sin\theta_B}= \frac{F_C}{sin\theta_C}$  

---

### Types of Stresses

**Normal Stress**  
$\sigma_{axial}=\frac FA$  

**Shear Stress**  
$\tau_{shear}=\frac FA$  
$\tau_{shear}=\frac {F}{2A}$  

**Bearing Stress**  
$\sigma_{bearing}=\frac F{td}$  

**Stress on an Oblique Plane**  
$\sigma_{\theta}= \frac{Fcos\theta}{\frac{A_0}{cos\theta}}= \frac{F}{A_0}cos^2\theta$  
$\tau_{\theta}= \frac{Fsin\theta}{\frac{A_0}{cos\theta}}= \frac{F}{A_0}sin\theta cos\theta$  
$\tau_{\theta}=\frac{F}{2A_0}sin2\theta$  
$\theta$* is the angle between the normal and inclined plane.*  

When $\theta=45\degree$,  
$\sigma_{45\degree}=\frac12\space\sigma_{max}$  
$\tau_{45\degree}=\frac12\space\sigma_{max}$  

---

### Factor of Safety

$FS=\frac{Ultimate\space Load}{Allowable\space Load}$  
$FS=\frac{Ultimate\space Stress}{Allowable\space Stress}$  

## Strain

### Stress-Strain Relationships

**Stress and Strain**  
$\varepsilon=\frac{L-L_0}{L_0}=\frac{\Delta L}{L_0}$  
$E=\frac{\sigma}{\varepsilon}$  

**Deformation**  
$\Delta L=\frac{FL_0}{AE}$  
$\Delta L=\sum_i\frac{F_iL_{0i}}{A_iE_i}$  
*where *$i$* represents that specific section of the member*  

---

### Poisson’s Ratio

**Poisson’s Ratio for Uniaxial Loading**  
$\upsilon=- \frac{\varepsilon_{lateral}}{\varepsilon_{longitudinal}}$  
$\upsilon=- \frac{\varepsilon_y}{\varepsilon_x}=- \frac{\varepsilon_z}{\varepsilon_x}$  
$\varepsilon_y=\varepsilon_z=-\frac{\upsilon\sigma_x}{E}$  

**Poisson’s Ratio for Multiaxial Loading**  
$\varepsilon_x= +\frac{\sigma_x}{E} -\frac{\upsilon\sigma_y}{E} -\frac{\upsilon\sigma_z}{E}$  
$\varepsilon_y= +\frac{\sigma_y}{E} -\frac{\upsilon\sigma_x}{E} -\frac{\upsilon\sigma_z}{E}$  
$\varepsilon_z= +\frac{\sigma_z}{E} -\frac{\upsilon\sigma_x}{E} -\frac{\upsilon\sigma_y}{E}$  

---

### Shear Strain

**Modulus of Rigidity**  
$ \tau_{xy}=G\gamma_{xy}$  
$ \tau_{yz}=G\gamma_{yz}$  
$ \tau_{zx}=G\gamma_{zx}$  
$\gamma$* is expressed in *$rad$  

**Diagonal Strain**  
$ \varepsilon_{diagonal}=\frac{(1+\upsilon)\tau}{E}$  
$ \varepsilon_{diagonal}=\frac{\gamma}{2}=\frac{\tau}{2G}$  
$ G=\frac{E}{2(1+\upsilon)}$ *where *$G<E$  

## Torsion

To identify the direction of torque, use the Right-Hand-Screw rule.  
The four fingers follow the direction of rotation while the thumb points towards torque.  

---

### Shear Strain and Stress

**Shear Strain**  
$\gamma=\frac{\rho\phi}{L}$  
*where *$\rho$* is the radius at any point, and *$\phi$* is the angle of twist*  

$\gamma_{max}=\frac{c\phi}{L}$  
*where *$c$* is the radius of the shaft where shear strain is maximum*  

$\gamma=\frac\rho c\ \gamma_{max}$  

**Shear Stress**  
$\tau=\frac\rho c\ \tau_{max}$  

**Elastic Torsion Formulae**  
$\tau_{max}=\frac{Tc}{J}$  
$\tau=\frac{T\rho}{J}$  

**Polar Moment of Inertia**  
$J=\frac{\pi c^4}{2}=\frac{\pi d^4}{32}$ *(solid shafts)*  
$J=\frac{\pi}2(c_2^{\ 4}-c_1^{\ 4})$  
*where *$c_2$* is the external radius and *$c_1$* is the internal radius*  

---

### Angle of Twist

**Angle of Twist in Elastic Range**  
$ \phi=\frac{TL}{JG}$  
*where *$\phi$* is expressed in *$rad$  
$\phi=\sum_i\frac{T_iL_i}{J_iG_i}$  
*where *$i$* represents that specific section of the member*  

---

### Power Transmission

$ Power=T\omega=2\pi fT$  
$ T=\frac{Power}{\omega}=\frac{Power}{2\pi f}$  
*where *$\omega$* is angular velocity in *$rad/s$  

## Pure Bending

### Bending Strain

$\varepsilon_x=-\frac{y}{c}\varepsilon_{max}$  
$\sigma_x=-\frac{y}{c}\sigma_{max}$  

---

### Second Moment of Area

**Determining the Neutral Axis**  
$\sum^n_{i=1}\ A_iy_i=A_T\bar y$  
E.g. $A_1y_1+A_2y_2=A_T\bar y$  

**Moment of Inertia**  
$I_{NA}=\frac{bh^3}{12}$ *(rectangular cross section with respect to the centroid)*  

$I_{NA}=\frac{\pi r^4}{4}$ *(solid circular cross section)*  
$I_{NA}=\frac{\pi (r_2^{\ 4}-r_1^{\ 4})}{4}$ *(hollow circular cross section)*  

**Parallel Axis Theorem**  
$I+Ad^2$  
*where *$I$* is the moment of inertia of a section,   
and *$A$* is the area of that section,  
and *$d$* is distance between the NA of the section and NA of the object*  

---

### Bending Stress (Centric)

$\sigma_{max}=\frac{Mc}{I}$  
*where *$M$* is the bending moment,  
and *$c$* is the maximum distance from neutral axis (NA),  
and *$I$* is the second moment of area (moment of inertia)*  

$\sigma_{x}=-\frac{My}{I}$  
*where *$M$* is the bending moment,  
and *$y$* is the distance from neutral axis (NA),  
and *$I$* is the second moment of area (moment of inertia)*  

**Elastic Section Modulus**  
$S=\frac{I}{c}$  
*where *$c$* is the distance from the neutral axis to the furthest surface*  

$\sigma_{max}=\frac{M}{S}$  
*where *$M$* is the bending moment,  
and *$S$* is the elastic section modulus*  

---

### Bending Stress (Eccentric)

$\sigma_x=\sigma_{x(centric)}+\sigma_{x(bending)}$  
$\sigma_x=\frac FA-\frac{My}{I}$  

**Generalized Eccentric Axial Loading**  
$\sigma=\sigma_{centric}\pm\sigma_{Mx}\pm\sigma_{My}$  
$\sigma_x=\frac{F}{A}\pm\frac{M_xy}{I_{xx}}\pm\frac{M_yx}{I_{yy}}$  
*The signs are to be determined through visualization.*  

## Analysis of Beams

### Design of Beams for Bending

$ S=\frac16bh^2$  
$ S_{min}=\frac{|M_{max}|}{\sigma_{allow}}$  

---

### Shear and Bending Moment Diagrams

Shear forces is considered positive if the forces causes a clockwise rotation.  
Bending moment is considered positive if the moment causes the beam to “smile” or “sag”.  

$ \frac{dV}{dx}=-w$  
$ \frac{dM}{dx}=V$  

---

### Shear Stress in Beams

**First Moment of Area**  
$Q=A_i\bar y_i$  

**Shear Stress**  
$\tau_{avg}=\frac{VQ}{It}$  
$ \tau_{max}=\frac{3V}{2A}$ *(narrow rectangular cross section)*  

---

### Shear Stress in Shafts

**First Moment of Area**  
$\bar y=\frac{4c}{3\pi}$  

$Q_C=\frac23r^3$ *(about the centroidal axis — solid shafts)*  
$Q_C=\frac23({r_o}^3-{r_i}^3)$ *(about the centroidal axis — hollow shafts)*  

**Shear Stress**  
$\tau_{max}=\frac{4V}{3A}$ *(circular cross section)*  

## Stress Transformations

### Stress Equations

$\sigma_{x'}+\sigma_{y'}=\sigma_x+\sigma_y$  

$\sigma_{x'}= \frac{\sigma_x+\sigma_y}{2}+ \frac{\sigma_x-\sigma_y}{2}cos2\theta+ \tau_{xy}sin2\theta$  
$\sigma_{y'}= \frac{\sigma_x+\sigma_y}{2}- \frac{\sigma_x-\sigma_y}{2}cos2\theta- \tau_{xy}sin2\theta$  
$\tau_{x'y'}= -\frac{\sigma_x-\sigma_y}{2}sin2\theta+\tau_{xy}cos2\theta$  

**Principal Plane and Principal Stresses**  
$tan2\theta_p=\frac{2\tau_{xy}}{\sigma_x-\sigma_y}$  
$\sigma_{avg}=\frac{\sigma_x+\sigma_y}2$  
$\sigma_{max/min}=\frac{\sigma_x+\sigma_y}{2}\pm\sqrt{(\frac{\sigma_x-\sigma_y}2)^2+{\tau_{xy}}^2}$  

**Maximum Shear Stress**  
$tan2\theta_s=-\frac{\sigma_x-\sigma_y}{2\tau_{xy}}$  
$\tau_{max}=\sqrt{(\frac{\sigma_x-\sigma_y}2)^2+{\tau_{xy}}^2}$  

---

### Failure Criteria

**Yield Criteria for Ductile Materials**  
$\tau_{max}=\frac12\sigma_{yield}$  
${\sigma_{max}}^2-\sigma_{max}\sigma_{min}+{\sigma_{min}}^2<{\sigma_{yield}}^2$  

**Fracture Criteria for Brittle Materials**  
$|\sigma_{max}|<\sigma_{yield}$  
$|\sigma_{min}|<\sigma_{yield}$  

---

### Thin-Walled Pressure Vessels

**Cylindrical Vessel**  
$\sigma_{hoop}=\frac{pr}{t}$  
$\sigma_{longitudinal}=\frac{pr}{2t}$  

$\tau_{max(in-plane)}=\frac{\sigma_{longitudinal}}{2}=\frac{pr}{4t}$  
$\tau_{max(out-of-plane)}=\frac{\sigma_{hoop}}{2}=\frac{pr}{2t}$  

**Spherical Vessel**  
$\sigma_{hoop}=\sigma_{longitudinal}=\frac{pr}{2t}$  
$\tau_{max}=\frac{pr}{4t}$  

## Strain Transformations

### Strain Equations

$\varepsilon_{x'}=\frac{\varepsilon_x+\varepsilon_y}{2}+\frac{\varepsilon_x-\varepsilon_y}{2}cos2\theta+\frac{\gamma_{xy}}{2}sin2\theta$  
$\varepsilon_{y'}=\frac{\varepsilon_x+\varepsilon_y}{2}-\frac{\varepsilon_x-\varepsilon_y}{2}cos2\theta-\frac{\gamma_{xy}}{2}sin2\theta$  
$\frac{\gamma_{x'y'}}2=-\frac{\varepsilon_x-\varepsilon_y}2sin2\theta+\frac{\gamma_{xy}}2cos2\theta$  

**Principal Plane and Principal Stresses**  
$tan2\theta_{P}=\frac{\gamma_{xy}}{\varepsilon_x-\varepsilon_y}$  
$\varepsilon_{avg}=\frac{\varepsilon_x+\varepsilon_y}{2}$  
$\varepsilon_{max/min}=\frac{\varepsilon_x+\varepsilon_y}{2}\pm\sqrt{(\frac{\varepsilon_x-\varepsilon_y}{2})^2+(\frac{\gamma_{xy}}{2})^2}$  

**Maximum Shear Strain**  
$tan2\theta_s=-\frac{\varepsilon_x-\varepsilon_y}{\gamma_{xy}}$  
$\frac{\gamma_{max(in-plane)}}{2}=\sqrt{(\frac{\varepsilon_x-\varepsilon_y}{2})^2+(\frac{\gamma_{xy}}{2})^2}$  

---

### Strain Rosettes

$\varepsilon_{x'}=\varepsilon_xcos^2\theta+\varepsilon_ysin^2\theta+\gamma_{xy}sin\theta cos\theta$  

## Deflection of Beams

### Double Integration Method

$\frac1\rho=\frac{M(x)}{EI}$  
$\frac{d^2y}{dx^2}=\frac{M(x)}{EI}$  

$EI\ \frac{d^2y}{dx^2}={M(x)}$  
$EI\ \frac{dy}{dx}=\int M(x)\ dx+C_1$  
$EI\ \theta=\int M(x)\ dx+C_1$  
$EI\ y=\iint M(x)\ dx+C_1x+C_2$  

---

### Singularity Functions

$\langle{x-a}\rangle^n =\begin{cases} (x-a)^n\ \ \ \ \ when\ x\ge a\\ 0\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ when\ x<a \end{cases}$  

## Buckling of Columns

$P_{cr}=\frac{\pi^2EI}{{KL}^2}$  
$ \sigma_{cr}=\frac{\pi^2E}{(KL/r)^2}$  

$K=2$ → fixed-free  
$K=1$ → pinned-pinned  
$K=0.7$ → fixed-pinned  
$K=0.5$ → fixed-fixed  
