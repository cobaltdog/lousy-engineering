# MA1001 - Formulae

> MA1001 · DYNAMICS — exported from Lousy Engineering

---

## Kinematics of Particles

### Rectilinear Motion

$v=\frac{ds}{dt}$  
$a=\frac{dv}{dt}$  
$v\ dv=a\ ds$  

**Motion with Constant Acceleration**  
$v=v_0+at$  
$s=s_0+v_0t+\frac12at^2$  
$v^2={v_0}^2+2a(s-s_0)$  
**Rotation with Constant Acceleration**  
$\omega=\omega_{0}+\alpha t$  
$\theta =\theta_0 +\omega_{0}t +\frac12\alpha t^2$  
${\omega}^2 ={\omega_{0}}^2 +2\alpha(\theta-\theta_0)$  

---

### Plane Curvilinear Motion

**Projectile Motion**  
$v_{0x}=v_0cos\theta$  
$v_{0y}=v_0sin\theta$  
$x=(v_0cos\theta)t$  
$y=y_0+(v_0sin\theta)t-\frac12gt^2$  
$v_x=v_0cos\theta$  
$v_y=v_0sin\theta-gt$  

**Normal and Tangential Coordinates**  
$\bold{e_t} =cos\theta\bold i +sin\theta\bold j$  
$\bold{e_n} =-sin\theta\bold i+cos\theta\bold j$  

$\bold v =v\bold{e_t} =\rho\dot\beta\bold{e_t}$  
$\bold a=\dot v\bold{e_t}+\frac{v^2}{\rho}\bold{e_n}$  
$\bold{a} =\bm\alpha\times\bold r +\bm\omega\times\bold v$  

**Polar Coordinates**  
$\bold v =r\dot\theta\bold{e_\theta} +\dot r\bold{e_r}$  
$\bold v =r\omega\bold{e_\theta} +v\bold{e_r}$  
$\bold{v_P} =\bold{v_{P'}}+\bold{v_{P/f}}$  
*where *$\bold{v_{P'}}$* is entrained velocity and *$\bold{v_{P/f}}$* is relative velocity*  

$\bold a =(\ddot r-r\dot\theta^2) \bold{e_r} +(r\ddot\theta+2\dot r\dot\theta) \bold{e_\theta}$  
$\bold a =(a-r\omega^2)\bold{e_r} +(r\alpha+2v\omega)\bold{e_\theta}$  

$\bold a =(r\ddot\theta\bold{e_\theta} -r\dot\theta^2\bold{e_r}) +\ddot r\bold{e_r} +2\dot r\dot\theta\bold{e_\theta}$  
$\bold a =(r\alpha\bold{e_\theta} -r\omega^2\bold{e_r}) +a\bold{e_r} +2v\omega\bold{e_\theta}$  
$\bold{a_P} =\bold{a_{P'}} +\bold{a_{P/f}} +\bold{a_{coriolis}}$  
*where *$\bold{a_{P'}}$* is entrained acceleration, *$\bold{a_{P/f}}$* is relative acceleration*  

## Kinematics of Rigid Bodies

### Motion Relative to Fixed Axis

**Relative Velocity due to Rotation**  
$\bold{v_A} =\bold{v_B} +\bm\omega\times\bold{r_{A/B}}$  

**Relative Acceleration due to Rotation**  
$\bold{a_A} =\bold{a_B} +\bold{a_{{A/B}_t}} +\bold{a_{{A/B}_n}}$  
$\bold{a_A} =\bold{a_B} +\bm\alpha\times\bold{r_{A/B}} +\bm\omega\times (\bm\omega\times\bold{r_{A/B}})$  

---

### Motion Relative to Rotating Axis

**Relative Velocity due to Rotation**  
$\bold{v_A} =\bold{v_B} +\bm\omega\times\bold{r_{A/B}} +\bold{v_{rel}}$  
$\bold{v_A} =\bold{v_B} +\bm\omega\times\bold{r_{A/B}} +(\bold{v_{A/B}})_{f}$  

**Relative Acceleration due to Rotation**  
$\bold{a_A} =\bold{a_B} +{\bm\alpha}\times\bold{r_{A/B}} +\bm\omega\times (\bm\omega\times\bold{r_{A/B}}) +2\bm\omega\times\bold{v_{rel}} +\bold{a_{rel}}$  
$\bold{a_A} =\bold{a_B} +{\bm\alpha} \times\bold{r_{A/B}} +\bm\omega\times (\bm\omega\times\bold{r_{A/B}}) +2\bm\omega\times (\bold{v_{A/B}})_{f} +(\bold{a_{A/B}})_{f}$  

## Kinetics of Particles

### Work and Energy Principles

$W=\int^{x_2}_{x_1}\ F_{net}\ dx$  
$W=\Delta KE$  

$W_{grav}=-mg(y_2-y_1)$  
$W_K=\frac12m{v_2}^2-\frac12m{v_1}^2$  
$W_{K_R}=\frac12I{\omega_2}^2-\frac12I{\omega_1}^2$  
$W_{elastic}=-\Big(\frac12k{x_2}^2-\frac12k{x_1}^2\Big)$  

---

### Impulse and Momentum

**Linear Momentum**  
$\bold L=m\bold v$  
$\bold{L_2}=\bold{L_1}+\int^{t_2}_{t_1}\sum\bold F\ dt$  
**Angular Momentum**  
$\bold H=\bold r\times m\bold v=\bold r\times\bold L$  
$\bold H=mr^2\bm\omega=I\bm\omega$  

$\frac{d\bold H}{dt} =(\frac{d}{dt} \ \bold r\times m\bold v) +(\bold r\times\frac{d}{dt} \ m\bold v)$  
$\frac{d\bold H}{dt} =(\bold v\times m\bold v) +(\bold r\times m\bold a)$  
$\frac{d\bold H}{dt}=\bold r\times\sum\bold F=\sum\bold M$  
$\bold{H_2}=\bold{H_1}+\int^{t_2}_{t_1}\sum\bold M\ dt$  

$\bold M=\frac{d}{dt}\ \bold H$  
$\bold M=\frac{d}{dt}\ I\bm\omega$  
$\bold M=I\bm\alpha$  

---

### Impact and Collisions

**Restitution Equation**  
$(v_{A2}^n-v_{B2}^n)= -e(v_{A1}^n-v_{B1}^n)$  
where $e$ determines the type of collision  
*The above equation is only applicable in the *$\bold{e_n}$*-direction.*  

$e=1$ — perfectly elastic collision (particles completely recover original shape after collision)  
$e=0.5$ — elastic-plastic collision (particles partially recover original shape after collision)  
$e=0$ — perfectly plastic collision (particles do not recover original shape after collision)  

**Tips for Solving**  
1. Resolve initial velocities in the $\bold{e_n}$ and $\bold{e_t}$ directions
1. Apply the restitution equation along the $\bold{e_n}$ direction
1. Determine, from FBD, the axis where $F_{net}=0$ *(can be either *$\bold i$*, *$\bold j$*, *$\bold{e_n}$*, or *$\bold{e_t}$*)*
1. Apply conservation of linear momentum in that axis *(may have to resolve vectors again)*

## Kinetics of Rigid Bodies

### Equations of Motion

**Translation of a Rigid Body**  
Untitled  

$\sum F_x=m(a_G)_x$  
$\sum F_y=m(a_G)_y$  
$\sum M_P=\sum M_{Forces}+M_G$  
$\sum M_P =m(a_G)_x\cdot dy -m(a_G)_y\cdot dx +I_G\alpha$  
*If resultant moment is summarized about the mass center *$G$*, then *$\sum M_G=I_G\alpha$*.*  

**Rotation of a Rigid Body**  
Untitled  

$\sum F_n=mr_G\omega^2$  
$\sum F_t=mr_G\alpha$  
$\sum M_P=\sum M_{Forces}+M_G$  
*where *$r_G$* is the radius between the axis of rotation to the selected point*  

---

### Angular Momentum

**Principle of Angular Momentum**  
$\bold{M_G} =\frac{d}{dt}\ \bold{H_G} =I_G\bm\alpha$  
$I_G=mr^2=\int r^2\ dm$  
$I_O=I_G+m{r_{G/O}}^2$  
*where *$I_G$* represents the mass moment of inertia about the mass center *$G$*  
and *$I_O$* represents the mass moment of inertia about some arbitrary point*  

**General Expression for Moment**  
$\bold{M_O}=I_G\bm\alpha +\bold{r_{G/O}}\times \bold{F}$  
$\bold{M_O}=I_G\bm\alpha +\bold{r_{G/O}}\times m\bold{a_G}$  
$\bold{H_O}=I_G\bm\omega +\bold{r_{G/O}}\times m\bold{v_G}$  
*where *$O$* is an arbitrary point that may also lie outside of the body*  

---

### Impulse and Momentum

**Linear Momentum**  
$\bold L=m\bold{v_G}$  
$\bold{L_2}=\bold{L_1} +\int^{t_2}_{t_1}\sum\bold F\ dt$  
$m\bold{v_{G2}}= m\bold{v_{G1}}+ \int^{t_2}_{t_1}\sum\bold F\ dt$  
**Angular Momentum**  
$\bold{H_G}=I_G\bm\omega$  
$\bold{H_2}=\bold{H_1} +\int^{t_2}_{t_1}\sum M_G\ dt$  
$I_G\bm\omega_\bold{2}= I_G\bm\omega_\bold{1}+ \int^{t_2}_{t_1}\sum M_G\ dt$  

*Linear impulse applied to a rigid body can cause a change in linear momentum of the body   
about its mass center *$G$*. If linear impulse produces a non-zero moment about *$G$* as well,   
it will also produce angular impulse that causes a change in angular momentum.*  

If there’s both linear and angular impulse, we can apply angular impulse for each of the rotating bodies, and then apply linear impulse for the entire system (moment is not included).  

---

### Work and Energy Principles

$KE=\frac12m{v_G}^2 +\frac12I_G\omega^2 =\frac12I_O\omega^2$  
*where *$O$* is a point in which the entire rigid body rotates about  
the first term corresponds to kinetic energy due to translation of the body  
and the second term corresponds to kinetic energy due to rotation about *$G$  

$W=Translational+Rotational$  
$W=\int^{x_2}_{x_1} \ \bold{F}\ d\bold{r_G} +\int^{\theta_2}_{\theta_1} \ M_G\ d\theta$  
