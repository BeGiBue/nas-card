// NAS Card v1.0.0 layout loader — CC BY-NC 4.0 — BeGiBue
(async()=>{
  await import('./nas-card-core.js');
  const C=customElements.get('nas-card');
  if(!C)return;

  C.prototype._metric=function(icon,id,label,t='neutral'){
    return `<button class="metric tone-${t}" data-more="${this._e(id)}"><ha-icon icon="${icon}"></ha-icon><span><small>${label}</small><b>${this._e(this._f(id))}</b></span></button>`;
  };

  C.prototype._drive=function(title,temp,life,sec,status){
    const m=(ic,id,l,t)=>`<button class="dm tone-${t}" data-more="${this._e(id)}"><ha-icon icon="${ic}"></ha-icon><span><small>${l}</small><b>${this._e(this._f(id))}</b></span></button>`;
    return `<section class="panel drive"><div class="dtitle"><ha-icon icon="mdi:harddisk"></ha-icon><b>${this._e(title)}</b></div>${m('mdi:thermometer',temp,'Temperatur','warning')}${m('mdi:heart-outline',life,'Restlebensdauer',this._tone(life))}${m('mdi:format-list-bulleted-square',sec,'Sektoren',this._tone(sec))}${m('mdi:check-circle-outline',status,'Status',this._tone(status))}</section>`;
  };

  const originalRender=C.prototype.render;
  const layoutCss=`
    :host{height:auto!important;min-height:0!important;overflow:visible!important}
    ha-card{position:relative!important;inset:auto!important;height:auto!important;min-height:0!important;overflow:hidden!important}

    .hero{min-height:0!important;justify-content:flex-start!important;gap:0!important}
    .metrics{margin-top:90px!important}
    .hero:not(:has(img)) .metrics{margin-top:20px!important}

    .metric,.ncard,.dm,.dtitle,.update,.fcard,.vstatus{justify-content:center!important;text-align:center!important}
    .metric span,.dm span,.ncard div,.update span,.fcard>span:last-child{align-items:center!important;text-align:center!important;justify-content:center!important}
    .metric small,.metric b,.dm small,.dm b,.ncard small,.ncard b,.update small,.update b,.fcard small,.fcard b,.vstatus small,.vstatus b{width:100%!important;text-align:center!important}
    .metric b,.dm b,.ncard b,.update b,.fcard b,.vstatus b,.vdetail strong{font-size:105%!important}
    .metric>ha-icon,.dm>ha-icon{flex:0 0 auto}
    .volume{justify-items:center!important;text-align:center!important}
    .vdetail{text-align:center!important}
    .vdetail>strong{display:block;text-align:center!important}
    .vdetail p{width:100%;margin-left:auto!important;margin-right:auto!important;text-align:center!important}
    .update{grid-template-columns:auto minmax(0,1fr) auto!important}
    .update>span:nth-child(2){justify-self:center!important}
    .foot .fcard{justify-content:center!important}

    @media(max-width:780px){
      .drive{align-items:stretch!important}
      .dtitle{justify-content:center!important}
      .dm{justify-content:center!important}
    }
    @media(max-width:560px){
      :host{height:auto!important}
      ha-card{height:auto!important}
      .hero{min-height:0!important;padding:18px!important;gap:0!important}
      .hero img{opacity:.28!important;width:56%!important;right:-6%!important;top:3px!important;max-height:145px!important}
      .metrics{margin-top:78px!important;gap:9px!important}
      .hero:not(:has(img)) .metrics{margin-top:20px!important}
    }
  `;

  C.prototype.render=function(){
    originalRender.call(this);
    const style=this.shadowRoot?.querySelector('style');
    if(style&&!style.textContent.includes('nas-card-v1.0.0-layout')){
      style.textContent+=`\n/* nas-card-v1.0.0-layout */\n${layoutCss}`;
    }
  };

  document.querySelectorAll('nas-card').forEach(card=>card.render?.());
  console.info('NAS Card v1.0.0 loaded');
})();
